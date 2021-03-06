
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Timespan, InternalDatasetId, DatasetApiMapping, DatasetApiVersion } from '@helgoland/core';
import moment from 'moment';

@Component({
  selector: 'n52-dataset-permalink-download',
  templateUrl: './dataset-permalink-download.component.html',
  styleUrls: ['./dataset-permalink-download.component.css']
})
export class DatasetPermalinkDownloadComponent implements OnChanges {

  @Input()
  public internalId: InternalDatasetId;

  @Input()
  public timeInterval: Timespan;

  @Input()
  public language: string;

  public downloadLink: string;
  private _requestParams: Map<string, string>;

  constructor(
    protected apiMapping: DatasetApiMapping,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._requestParams) {
      this.prepareRequestParams();
      this.createCsvLink(this.internalId.id, this.internalId.url);
    }
    if (changes.timeInterval) {
      if (this.internalId && this.timeInterval) {
        this.prepareTimeSpan(this.timeInterval);
      }
    }
  }

  private prepareTimeSpan(ts: Timespan) {
    const timespan = this.createRequestTimespan(ts);
    this.updateCsvLink('timespan', timespan);
  }

  private prepareRequestParams() {
    this._requestParams = new Map();
    this._requestParams.set('generalize', 'false');
    this._requestParams.set('locale', (this.language && this.language !== '' ? this.language : 'en'));
    this._requestParams.set('zip', 'true');
    this._requestParams.set('bom', 'true');
  }

  private createCsvLink(id: string, apiUrl: string) {
    this.apiMapping.getApiVersion(apiUrl).subscribe((apiVersionId) => {
      let url;
      if (apiVersionId === DatasetApiVersion.V1) {    // datasets (V2) - todo: change
        url = this.createBaseUrl(apiUrl, 'datasets', id) + '/getData.zip?';
      } else if (apiVersionId === DatasetApiVersion.V2) {   // timeseries (V1) - todo: change
        const idconv: string = String(id.match(/\d+$/)); // select last set of digits (e.g. id="this3_id_45_is_89" ==> 89)
        url = this.createBaseUrl(apiUrl, 'timeseries', idconv) + '/getData.zip?';
      } else {
        console.log('wrong API version to download data');
      }
      url = this.addUrlParams(url, this._requestParams);
      this.downloadLink = url;
    });
  }

  private createBaseUrl(apiUrl: string, endpoint: string, id?: string) {
    let requestUrl = apiUrl + endpoint;
    if (id) { requestUrl += '/' + id; }
    return requestUrl;
  }

  private addUrlParams(url: string, params: Map<string, string>): string {
    params.forEach((value: string, key: string) => {
      url += key + '=' + value + '&';
    });
    return url.slice(0, -1);
  }

  private createRequestTimespan(timespan: Timespan): string {
    return encodeURIComponent(moment(timespan.from).format() + '/' + moment(timespan.to).format());
  }

  private updateRequestParam(key: string, value: string) {
    this._requestParams.set(key, value);
  }

  private updateCsvLink(key: string, value: string) {
    this.updateRequestParam(key, value);
    this.createCsvLink(this.internalId.id, this.internalId.url);
  }

}

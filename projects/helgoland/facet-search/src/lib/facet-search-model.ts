import { Timeseries, Timespan } from '@helgoland/core';
import { Observable } from 'rxjs';

export interface FacetSearch {
    getResults(): Observable<Timeseries[]>;
    getParameterList(type: ParameterFacetType, sort: ParameterFacetSort): FacetParameter[];
    selectParameter(type: ParameterFacetType, parameter: FacetParameter): any;
    setTimeseries(timeseries: Timeseries[]);
    getFilteredResults(): Timeseries[];
    setSelectedTimespan(timespan: Timespan);
    getSelectedTimespan(): Timespan;
    getFilteredTimespan(): Timespan;
    getCompleteTimespan(): Timespan;
}

export enum ParameterFacetType {
    category = 'category',
    phenomenon = 'phenomenon',
    procedure = 'procedure',
    feature = 'feature',
    offering = 'offering'
}

export enum ParameterFacetSort {
    none = 'none',
    ascAlphabet = 'ascAlphabet',
    descAlphabet = 'descAlphabet',
    ascCount = 'ascCount',
    descCount = 'descCount',
}

export interface FacetParameter {
    label: string;
    count: number;
    selected: boolean;
}

/**
 * Plot options for D3 component.
 *
 * @export
 */
export interface D3PlotOptions {

    /**
     * Show stepper for every Y-axis. This stepper allows to change the range of the axis.
     *
     * @memberof D3PlotOptions
     */
    yAxisStepper?: boolean;

    /**
     * show reference values for a graph
     *
     * @memberof D3PlotOptions
     */
    showReferenceValues?: boolean;

    /**
     * requests the dataset data generalized
     *
     * @memberof D3PlotOptions
     */
    generalizeAllways?: boolean;

    /**
     * toggle panning (true) and zooming (false)
     *
     * @memberof D3PlotOptions
     */
    togglePanZoom?: boolean;

    /**
     * show or hide y axis
     *
     * @memberof D3PlotOptions
     */
    yaxis?: boolean;

    /**
     * show or hide grid lines inside plot
     *
     * @memberof D3PlotOptions
     */
    grid?: boolean;

    /**
     * show or hide lines with values when hovering with mouse
     *
     * @memberof D3PlotOptions
     */
    hoverable?: boolean;

    /**
     * style when hovering with mouse
     *
     * @memberof D3PlotOptions
     */
    hoverStyle?: HoveringStyle;

    /**
     * indicating if component should build overview diagram or not
     *
     * @memberof D3PlotOptions
     */
    overview?: boolean;

    /**
     * show copyright label
     *
     * default position is top left
     *
     * @memberof D3PlotOptions
     */
    copyright?: D3Copyright;

    /**
    * toggle dataset grouping by uom
    * true = group y axis by uom
    * false = single y axis for each timeseries
    *
    * @memberof D3PlotOptions
    */
    groupYaxis?: boolean;

    /**
    * show the label of the xaxis
    *
    * @memberof D3PlotOptions
    */
    showTimeLabel?: boolean;

    /**
    * Request the data with expanded=true, to get valueBeforeTimespan/valueAfterTimespan
    *
    * @memberof D3PlotOptions
    */
    requestBeforeAfterValues?: boolean;

    /**
     * Buffering factor for the get Data requests, which will be added before and after the timespan for every get data request.
     */
    timespanBufferFactor?: number;

    /**
     * Sends request only, when the corresponding dataset has values inside the request timespan. So the first and last values must cover the timespan.
     */
    sendDataRequestOnlyIfDatasetTimespanCovered?: boolean;
}

export interface D3Copyright {
    label: string;
    positionX?: 'right' | 'left';
    positionY?: 'top' | 'bottom';
}

export enum HoveringStyle {
    none = 'none',
    line = 'line',
    point = 'point'
}

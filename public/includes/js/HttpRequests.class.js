/**
 * Class to easily send and process Http Requests.
 *
 * @author Adriaan <adriaan@intermix.nl>
 * @version 0.1.5
 */
class HttpRequests {

    _url                                =               ''
    _responseType                       =               'JSON'

    _useHttpRequestEvents               =               false
    _httpRequestEvent                   =               CustomEvent
    _httpRequestEventData               =               {}

    /**
     * Create a HttpRequest class to easily send and process Http Requests.
     */
    constructor() {

        this.httpRequestEvent = new CustomEvent( 'httpRequest', { detail : {} } )

    }

    /**
     * Get the URL variable.
     *
     * @returns {string} - The url to send the Http Request to.
     */
    get url() {
        return this._url;
    }

    /**
     * Set the URL variable.
     *
     * @param {string} url - The URL to send the Http Request to.
     */
    set url( url ) {
        this._url = url;
    }

    /**
     * Get the response type variable.
     *
     * @returns {string} - The response type of the Http Request.
     */
    get responseType() {
        return this._responseType;
    }

    /**
     * Set the response type variable.
     *
     * @param {string} responseType - The response type of the Http Request.
     */
    set responseType( responseType ) {
        this._responseType = responseType;
    }

    /**
     * Get the use Http Request events variable.
     *
     * @returns {boolean} - If the Http Request class should fire events.
     */
    get useHttpRequestEvents() {
        return this._useHttpRequestEvents
    }

    /**
     * Set the use Http Request events variable.
     *
     * @param {boolean} useHttpRequestEvents - If the Http Request class should fire events.
     */
    set useHttpRequestEvents( useHttpRequestEvents ) {
        this._useHttpRequestEvents = useHttpRequestEvents
    }

    /**
     * Get the Http Request event data variable.
     *
     * @returns {object} - The Http Request event data.
     */
    get httpRequestEventData() {
        return this._httpRequestEventData
    }

    /**
     * Set the Http Request event data variable.
     *
     * @param {object} httpRequestEventData - The Http Request event data.
     */
    set httpRequestEventData( httpRequestEventData ) {
        this._httpRequestEventData = httpRequestEventData
    }

    /**
     * Get the event that dispatches when a Http Request is made.
     *
     * @returns {CustomEvent} - The event that is dispatched when a Http Request is made.
     */
    get httpRequestEvent() {
        return this._httpRequestEvent
    }

    /**
     * Set the event that dispatches when a Http Request is made.
     *
     * @param {CustomEvent} httpRequestEvent - The event that is dispatched when a Http Request is send.
     */
    set httpRequestEvent( httpRequestEvent ) {
        this._httpRequestEvent = httpRequestEvent
    }

    /**
     * Set the event details of the Http Request event.
     *
     * @param {object} httpRequestEventDetail - The details of the Http Request event.
     */
    set httpRequestEventDetail( httpRequestEventDetail ) {
        this.httpRequestEvent.data = httpRequestEventDetail
    }

    /**
     * Send a Http Get Request.
     *
     * @param {string} url - The URL to send the Http Request to.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async get( url = this.url ) {

        return new Promise( async ( resolve ) => {

            resolve( await this.sendHttpRequest( 'GET', url ) )

        } )

    }

    /**
     * Send a Http Post Request.
     *
     * @param {object} data - The object with the data to send along with the Http Request.
     * @param {string} url - The URL to send the Http Request to.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async post( data = {}, url = this.url ) {

        return new Promise( async ( resolve ) => {

            resolve( await this.sendHttpRequest( 'POST', url, data ) )

        } )

    }

    /**
     * Send a Http Put Request.
     *
     * @param {object} data - The object with the data to send along with the Http Request.
     * @param {string} url - The URL to send the Http Request to.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async put( data = {}, url = this.url ) {

        return new Promise( async ( resolve ) => {

            resolve( await this.sendHttpRequest( 'PUT', url, data ) )

        } )

    }

    /**
     * Send a Http Patch Request.
     *
     * @param {object} data - The object with the data to send along with the Http Request.
     * @param {string} url - The URL to send the Http Request to.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async patch( data = {}, url = this.url ) {

        return new Promise( async ( resolve ) => {

            resolve( await this.sendHttpRequest( 'PATCH', url, data ) )

        } )

    }

    /**
     * Send a Http Delete Request.
     *
     * @param {string} url - The URL to send the Http Request to.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async delete( url = this.url ) {

        return new Promise( async ( resolve ) => {

            resolve( await this.sendHttpRequest( 'DELETE', url ) )

        } )

    }

    /**
     * Send a Http Request.
     *
     * @param {string} method - The method of the Http Request.
     * @param {string} url - The URL to send the Http Request to.
     * @param {object} data - The object with the data to send along with the Http Request.
     * @returns {Promise<string>} - The result of the Http Request.
     */
    async sendHttpRequest( method = 'GET', url = this.url, data = {} ) {

        this.url = url

        let oHttpRequestEventData = {
            url : this.url,
            request_method : method,
            status_type : 'send',
            status_code : '',
            response_data : ''
        }
        this.httpRequestEventData = oHttpRequestEventData

        return new Promise( ( resolve ) => {

            let httpRequest = new XMLHttpRequest()
            httpRequest.onreadystatechange = () => {
                if( httpRequest.readyState === 4 ) {
                    let httpRequestStatusType = ''
                    let httpRequestStatus = httpRequest.status
                    let httpRequestResponseText = httpRequest.responseText
                    if( this.responseType === 'JSON' ) {
                        httpRequestResponseText = JSON.parse( httpRequest.responseText )
                    }

                    if( httpRequestStatus >= 200 && httpRequestStatus <= 299 ) {
                        httpRequestStatusType = 'success'
                    }
                    if( httpRequestStatus >= 300 && httpRequestStatus <= 399 ) {
                        httpRequestStatusType = 'redirect'
                    }
                    if( httpRequestStatus >= 400 && httpRequestStatus <= 499 ) {
                        httpRequestStatusType = 'client_error'
                    }
                    if( httpRequestStatus >= 500 && httpRequestStatus <= 599 ) {
                        httpRequestStatusType = 'server_error'
                    }

                    oHttpRequestEventData.status_type = httpRequestStatusType
                    oHttpRequestEventData.status_code = httpRequestStatus
                    oHttpRequestEventData.response_data = httpRequestResponseText
                    this.httpRequestEventData = oHttpRequestEventData

                    this.dispatchHttpRequestEvent()
                    resolve( httpRequestResponseText )

                    oHttpRequestEventData.status_type = 'finished'
                    this.httpRequestEventData = oHttpRequestEventData
                    this.dispatchHttpRequestEvent()
                }
            }

            httpRequest.open( method, this.url, true )
            switch( method ) {
                case 'GET':
                case 'DELETE':
                    httpRequest.send()
                    break
                case 'POST':
                case 'PUT':
                case 'PATCH':
                    httpRequest.setRequestHeader( 'Content-type', 'application/json; charset=UTF-8' )
                    httpRequest.send( JSON.stringify( data ) )
                    break
            }
            this.dispatchHttpRequestEvent()

        } )

    }

    /**
     * Dispatch the Http Request event.
     */
    dispatchHttpRequestEvent() {

        if( this.useHttpRequestEvents ) {
            this.httpRequestEventDetail = this.httpRequestEventData
            window.dispatchEvent( this.httpRequestEvent )
        }

    }

}

// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine CreateElementError
 * @apiVersion 0.1.0
 *
 * @apiError Error500-1 Le format de données saisies n'est pas valide.
 *
 * @apiErrorExample  Response (Error500-1):
 *     Error 500: Internal Server Error
 *     {
 *       "message": "Element validation failed"
 *     }  
 */

/**
 * @apiDefine IdNotFound
 * @apiVersion 0.1.0
 *
 * @apiError Error500-2 L'<code>id</code> de l'élément saisi n'a pas été trouvé.
 *
 * @apiErrorExample  Response (Error500-2):
 *     Error 500: Internal Server Error
 *     {
 *       "message": "Cast to ObjectId failed for value \":id\" at path \"_id\"
 *     }  
 */



/**
 * @apiDefine UserRequired
 * @apiVersion 0.1.0
 *
 * @apiError Error400-2 L'<code>id</code> du user est nécessaire.
 *
 * @apiErrorExample  Response (Error400-2):
 *     Error 400: Bad Request
 *     {
 *       User ID is required
 *     }
 *     
 *     
 *     
 *     
 */


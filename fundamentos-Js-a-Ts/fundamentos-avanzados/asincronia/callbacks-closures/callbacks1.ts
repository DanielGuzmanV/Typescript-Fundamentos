// Ejemplo de prueba (no funciona):
// function requestHandler(req, res) {
//     User.findById(req.userId, function(err, user) {
//         if(err) {
//             res.send(err);
//         } else {
//             TextTrackList.findById(user.taskId, function(err, tasks) {
//                 if(err) {
//                     return res.send(err);
//                 } else {
//                     tasks.completed = true;
//                     tasks.save(function(err) {
//                         if(err) {
//                             return res.send(err);
//                         } else{
//                             res.send('Task completed...');
//                         }
//                     })
//                 }
//             })
//         }
//     })
// }

// NO es recomendable usar de esta manera, ya que el codigo no es muy 
// entendible y estariamos realizando  el "callback-Hell"









/* global app, db_Upload, db_Sub, path */

app.get(  '/subtitle/:id', function( request, response ) {
  var id = request.params.id;
  // console.log('get id: ', id);
  db_Media.getMediaById(id, function(err, media){
    if(err){  throw err;  }

    db_Sub.getSubById(media.sub, function(err, sub){
      if(err){  throw err;  }
      data = { subtitle: sub.content,
              　audio: media.name,
                _id: sub._id}
      response.render( 'subtitle',  data)
    })

  });
})

app.post( '/subtitle/save/:id', function(req, res){
  var content = req.body.content;

  db_Sub.updateSub(req.params.id, content, null, function(err){
    if(err){  throw err;  }

    res.end('success');
  });
})

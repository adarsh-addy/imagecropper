var imgurl;
var cropped = document.getElementsByClassName('cropped'),
    img_result = document.getElementsByClassName('img-result')
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
        setTimeout(initCropper, 1000);
    }
}
function initCropper() {
    console.log("Came here")
    var image = document.getElementById('blah');
    var cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        crop: function (e) {
            console.log(e.detail.x);
            console.log(e.detail.y);
        }
    });

    // On crop button clicked
    // document.getElementById('crop_button').addEventListener('click', function () {
    //     imgurl = cropper.getCroppedCanvas().toDataURL();
    //     console.log(imgurl);
    //     var img = document.createElement("img");
    //     img.src = imgurl;
    //     document.getElementById("cropped_result").appendChild(img);

    // save on click
    let flag=true;
    document.getElementById('save_button').addEventListener('click', (e) => {
        e.preventDefault();
        // get result to data uri
        if(flag){
        imgurl = cropper.getCroppedCanvas().toDataURL();
        console.log(imgurl);
        var img1 = document.createElement("img");
        img1.src = imgurl;
        document.getElementById("cropped_result").appendChild(img1);
        flag=false;
        }
    });

    /* ---------------- SEND IMAGE TO THE SERVER-------------------------
 
                cropper.getCroppedCanvas().toBlob(function (blob) {
                      var formData = new FormData();
                      formData.append('croppedImage', blob);
                      // Use `jQuery.ajax` method
                      $.ajax('/path/to/upload', {
                        method: "POST",
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function () {
                          console.log('Upload success');
                        },
                        error: function () {
                          console.log('Upload error');
                        }
                      });
                });
            ----------------------------------------------------*/
    //     })
}



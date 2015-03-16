

$('#submit-button').on('click', function() {
    var name = function(){
      var givenName = $('input[name="given-name"]').val();
      var surname = $('input[name="surname"]').val();
      var name = (givenName) + " " + (surname);
      return name
    }
      $('.name-display').html(name);

    var email = function(){
      var email = $('input[name="email-address"]').val();
      return email;
    }
      $('.email-address-area').html(email);

    var phone = function(){
      var phone = $('input[name="phone-number"]').val();
      return phone;
    }
      $('.phone-number-area').html(phone);

    var address = function(){
      var houseName = $('input[name="house-name"]').val() + " ";
      var street = $('input[name="street"]').val();
      var address = houseName + street;
      return address;
    }
      $('.address-area').html(address);


    var district = function(){
      var suburb = $('input[name="suburb"]').val() + ", ";
      var state = $('input[name="state"]').val().toUpperCase(); 
      var district = suburb + state;
      return district;
    }
      $('.district-area').html(district);
  

    var postcode = function(){
      var postcode = $('input[name="postcode"]').val();
      return postcode;
    }
     $('.postcode-area').html(postcode);
      
    var country = function(){
      var country = $('input[name="country"]').val();
      return country;
    } 
     $('.country-area').html(country);  
  event.preventDefault();

});



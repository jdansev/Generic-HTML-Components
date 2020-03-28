$(document).ready(function() {

    // Booking Enquiry Form
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    $('[data-booking-enquiry-form]').on('submit', function(e) {
        e.preventDefault();

        var form = $(this);

        let numOfGuests = $('[data-guests-radio]:checked').val();
        console.log(`numOfGuests: ${numOfGuests}`);

        let arrivalDate = $('[data-date-picker-arrival]').val();
        let departureDate = $('[data-date-picker-departure]').val();
        console.log(`arrivalDate: ${arrivalDate}`);
        console.log(`departureDate: ${departureDate}`);

        if (arrivalDate == '' || departureDate == '') {
            console.error('arrival or departure date not selected');
            return;
        }

		let firstName = form[0].elements['first_name'].value;
		let lastName = form[0].elements['last_name'].value;
		let email = form[0].elements['email'].value;
		let phone = form[0].elements['phone'].value;
		let notes = form[0].elements['notes'].value;

		console.log(`first name: ${firstName}`);
		console.log(`last name: ${lastName}`);
		console.log(`email: ${email}`);
		console.log(`phone ${phone}`);
		console.log(`notes: ${notes}`);


        // Submit the form
        var url = form.attr('action');

        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            notes: notes
        };

        console.log(formData);

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            success: function (data) {
                alert(data); // show response from the php script.
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });


    });

    let arrivalDate = undefined, departureDate = undefined;

    const customFormatter = (input, date, instance) => {
        let year = date.getFullYear();
        let monthIndex = date.getMonth();
        let day = date.getDate() + '';

        while (day.length < 2) day = '0' + day;

        let month = months[monthIndex];
        input.value = `${day} ${month} ${year}`; // => '01 Jan 1999'
    }

    const defaultPickerptions = {
        id: 1,
        formatter: customFormatter

        /* trigger the mobile device's native date picker instead */
        // disableMobile: true,
    }

    const MAX_STAY_DAYS = 7;

    let arrivalDateOptions = {
        ...defaultPickerptions,
        onShow: instance => {
            instance.setMax();
        },
        onSelect: (instance, arrival) => {
            let latestDeparture = new Date(arrival);
            latestDeparture.setDate(latestDeparture.getDate() + MAX_STAY_DAYS-1);

            departureDate.disabled = false;
            departureDate.setMax(latestDeparture);

            $('[data-date-picker-departure]').prop('disabled', false);
        },
        minDate: new Date()
    };

    arrivalDate = datepicker('[data-date-picker-arrival]', arrivalDateOptions);
    departureDate = datepicker('[data-date-picker-departure]', defaultPickerptions);
    departureDate.disabled = true;

});

var content = document.querySelector(".content");

const request = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + i);
    const json = await response.json();
    const photo = await fetch('https://jsonplaceholder.typicode.com/photos/' + i);
    const json_photo = await photo.json();
    console.log(json);

    var card_info = document.createElement("div");
	card_info.className = 'card-info';

// ===========================================

	var star = document.createElement("div");
	star.className = 'star';

	var img_star = new Image();
	img_star.src = "images/star_offline.png";
	star.appendChild(img_star);

// ===========================================

	var settings = document.createElement("div");
	settings.className = 'settings';

	var img_settings = new Image();
	img_settings.src = "images/dots.png";
	settings.appendChild(img_settings);

// ===========================================

	var settings = document.createElement("div");
	settings.className = 'settings';

	var img_settings = new Image();
	img_settings.src = "images/dots.png";
	settings.appendChild(img_settings);

// ===========================================

	var photo_avatar = document.createElement("div");
	photo_avatar.className = 'photo-avatar';

	var img_avatar = new Image();
	img_avatar.src = json_photo.url;
	photo_avatar.appendChild(img_avatar);

// ===========================================

	var name = document.createElement("h4");
	name.className = 'name font';
	name.innerText = json.name;

// ===========================================

	var email = document.createElement("p");
	email.className = 'email font';
	email.innerText = json.email;

// ===========================================

	var address = document.createElement("p");
	address.className = 'address font';
	address.innerText = json.address.city +', '+ json.address.street +', '+json.address.suite;

// ===========================================

	var phone = document.createElement("p");
	phone.className = 'phone font';
	phone.innerText = json.phone;

// ===========================================

	var web = document.createElement("p");
	web.className = 'web font';
	web.innerText = json.website;

// ===========================================

	var card_info = document.createElement("div");
	card_info.className = 'card-info';

	card_info.appendChild(star);
	card_info.appendChild(settings);
	card_info.appendChild(photo_avatar);
	card_info.appendChild(name);
	card_info.appendChild(email);
	card_info.appendChild(address);
	card_info.appendChild(phone);
	card_info.appendChild(web);
	content.appendChild(card_info);
}

for (var i = 1; i < 11; i++) {
	request();
}

---
layout: page
title: Contact Me
featured_image: /assets/img/stock/stock_blog_photo_5.jpg
---

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices semper odio, commodo ultrices mauris blandit quis. Aliquam ultricies sem enim, id euismod diam pretium id.
</p>
<form action="https://formspree.io/{{ site.email }}" method="POST">
	<div class="inline-form margin-bottom">
		<div class="form-input">
			<label for="name">Your Name:</label>
			<input type="text" id="name" name="name">
		</div>
		<div class="form-input">
			<label for="_replyto">Your Email:</label>
			<input type="text" id="_replyto" name="_replyto">
		</div>
	</div>
	<div class="form-input margin-bottom">
		<div class="select">
			<select name="reason">
				<option>Reason for contacting</option>
				<option value="Feedback">Site Feedback</option>
			</select>
			<i class="fa fa-caret-down"></i>
		</div>
	</div>
	<div class="form-input margin-bottom">
		<label for="message">Your Message:</label>
		<textarea name="message" id="message"></textarea>
	</div>
	<div class="form-input text-center margin-bottom">
		<button type="submit" class="btn no-icon">Contact Me</button>
	</div>
	<input type="text" name="_gotcha" style="display:none" />
</form>
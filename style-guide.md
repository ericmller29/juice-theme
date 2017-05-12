---
layout: page
title: Style Guide
permalink: /style-guide/
featured_image: /assets/img/stock/stock_blog_photo_3.jpg
---

<p>My fellow <a href="http://eastoh.co" target="_blank">Earthicans</a>, as I have explained in my book "<a href="http://eastoh.co" target="_blank">Earth in the Balance</a>", and the much more popular "Harry Potter and the Balance of Earth", we need to defend our planet against pollution. Also dark wizards. We don't have a brig.</p>
<p>Tell them I hate them. <strong> Tell her she looks thin.</strong> <em> Who's brave enough to fly into something we all keep calling a death sphere?</em> Yeah, I do that with my stupidness.</p>

<hr>

<h1>This is the style for heading 1</h1>
<h2>This is the style for heading 2</h2>
<h3>This is the style for heading 3</h3>
<h4>This is the style for heading 4</h4>
<h5>This is the style for heading 5</h5>
<h6>This is the style for heading 6</h6>

<hr>

<ul>
	<li>This is the worst part. The calm before the battle. Your best is an idiot! Yes, except the Dave Matthews Band doesn't rock. I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.</li>
	<li>Well, let's just dump it in the sewer and say we delivered it.</li><li>Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo!</li>
	<li>Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.</li>
</ul>

<hr>

<ol>
	<li>This is the worst part. The calm before the battle. Your best is an idiot! Yes, except the Dave Matthews Band doesn't rock. I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.</li>
	<li>Well, let's just dump it in the sewer and say we delivered it.</li><li>Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo!</li>
	<li>Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.</li>
</ol>

<hr>

<blockquote>Oh, I don't have time for this. I have to go and buy a single piece of fruit with a coupon and then return it, making people wait behind me while I complain. Fry! Stay back! He's too powerful! I don't want to be rescued.</blockquote>

<hr>

{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

<hr>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZOa59_yt1uY?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

<hr>

<iframe width="100%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314672405&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

<hr>

<p data-height="499" data-theme-id="0" data-slug-hash="ZKxvWE" data-default-tab="css,result" data-user="thesupersloth" data-embed-version="2" data-pen-title="Pure CSS iPhone" class="codepen">See the Pen <a href="http://codepen.io/thesupersloth/pen/ZKxvWE/">Pure CSS iPhone</a> by Emily Goldfein (<a href="http://codepen.io/thesupersloth">@thesupersloth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<hr>

<h2>Just a plain old image</h2>

<img src="/assets/img/stock/stock_blog_photo_1.jpg">

<hr>

<h2>A figure image with a caption</h2>

<figure>
    <img src="/assets/img/stock/stock_blog_photo_4.jpg" />
    <figcaption>I'm a fun image caption!</figcaption>
</figure>

<hr>
<h2>Here are some form elements</h2>

<div class="form-input">
	<label for="text-field">Text Field Label:</label>
	<input type="text" name="text-field" id="text-field">
</div>
{% highlight html linenos %}
<div class="form-input">
    <label for="text-field">Text Field Label</label>
    <input type="text" name="text-field" id="text-field">
</div>
{% endhighlight %}

<div class="form-input">
	<label for="text-area">Text Area Label:</label>
	<textarea name="text-area" id="text-area"></textarea>
</div>
{% highlight html linenos %}
<div class="form-input">
	<label for="text-area">Text Area Label:</label>
	<textarea name="text-area" id="text-area"></textarea>
</div>
{% endhighlight %}

<h3>Radio Buttons</h3>
<p>How fun right?</p>
<div class="form-input">
	<input id="radio-1" name="radio" type="radio" checked>
	<label for="radio-1" class="radio-label">Checked</label>
</div>
<div class="form-input">
	<input id="radio-2" name="radio" type="radio">
	<label for="radio-2" class="radio-label">Unchecked</label>
</div>
<div class="form-input">
	<input id="radio-3" name="radio" type="radio" disabled="disabled">
	<label for="radio-3" class="radio-label">Disabled</label>
</div>

{% highlight html linenos %}
<div class="form-input">
	<input id="radio-1" name="radio" type="radio" checked>
	<label for="radio-1" class="radio-label">Checked</label>
</div>
<div class="form-input">
	<input id="radio-2" name="radio" type="radio">
	<label for="radio-2" class="radio-label">Unchecked</label>
</div>
<div class="form-input">
	<input id="radio-3" name="radio" type="radio" disabled="disabled">
	<label for="radio-3" class="radio-label">Disabled</label>
</div>
{% endhighlight %}

<h3>Checkboxes</h3>

<div class="form-input">
	<input id="checkbox-1" name="checkbox-1" type="checkbox">
	<label for="checkbox-1">Checkbox unchecked</label>
</div>
<div class="form-input">
	<input id="checkbox-2" name="checkbox-2" type="checkbox" checked>
	<label for="checkbox-2">Checkbox checked</label>
</div>
<div class="form-input">
	<input id="checkbox-3" name="checkbox-3" type="checkbox" disabled>
	<label for="checkbox-3">Checkbox disabled</label>
</div>

{% highlight html linenos %}
<div class="form-input">
	<input id="checkbox-1" name="checkbox-1" type="checkbox">
	<label for="checkbox-1">Checkbox unchecked</label>
</div>
<div class="form-input">
	<input id="checkbox-2" name="checkbox-2" type="checkbox" checked>
	<label for="checkbox-2">Checkbox checked</label>
</div>
<div class="form-input">
	<input id="checkbox-3" name="checkbox-3" type="checkbox" disabled>
	<label for="checkbox-3">Checkbox disabled</label>
</div>
{% endhighlight %}

<h3>Selectbox!</h3>

<div class="form-input margin-bottom">
	<label for="selectbox-active">Selectbox Active: </label>
	<div class="select">
		<select name="selectbox-active" id="selectbox-active">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</select>
		<i class="fa fa-caret-down"></i>
	</div>
</div>
<div class="form-input">
	<label for="selectbox-disabled">Selectbox Disabled: </label>
	<div class="select">
		<select name="selectbox-disabled" id="selectbox-disabled" disabled>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</select>
		<i class="fa fa-caret-down"></i>
	</div>
</div>

{% highlight html linenos %}
<div class="form-input margin-bottom">
	<label for="selectbox-active">Selectbox Active: </label>
	<div class="select">
		<select name="selectbox-active" id="selectbox-active">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</select>
		<i class="fa fa-caret-down"></i>
	</div>
</div>
<div class="form-input">
	<label for="selectbox-disabled">Selectbox Disabled: </label>
	<div class="select">
		<select name="selectbox-disabled" id="selectbox-disabled" disabled>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</select>
		<i class="fa fa-caret-down"></i>
	</div>
</div>
{% endhighlight %}
<hr>

<h2>Buttons!</h2>

<button type="submit" class="btn">
	Button
	<i class="fa fa-thumbs-up"></i>
</button>

<button type="submit" class="btn icon-left">
	<i class="fa fa-thumbs-up"></i>
	Button Icon Left
</button>

<button type="submit" class="btn no-icon">
	Button No Icon
</button>

<button type="submit" class="btn big">
	Button Big
	<i class="fa fa-thumbs-up"></i>
</button>

<button type="submit" class="btn big icon-left">
	Button Big Icon Left
	<i class="fa fa-thumbs-up"></i>
</button>

<button type="submit" class="btn big no-icon">
	Button Big No Icon
</button>

<button type="submit" class="btn full">
	Button Full Width
</button>

<button type="submit" class="btn big full">
	Button Full Width
</button>
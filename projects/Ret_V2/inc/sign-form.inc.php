<div class="footer_bg" id="signin-div"><!-- start signin -->
<div class="container">
	<div class="row footer">
		<div class="col-md-8 contact_left">
			<h3>Get connected <i class="fa fa-user-circle-o" aria-hidden="true"></i></h3>
			<p>You have to be logged in in order to play with your friends at Retention</p>
			<form method="get" id="signin-form" action="../php/login.php">
				<input id="login-signin" type="text" value="Jean" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}"/>
				<input id="pwd-signin" type="password" value="pass" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"/>
				<span class="pull-right">
					<input type="submit" value="Sign in">
						Sign in
					</input>
				</span>
			</form>
		</div>
		<div class="col-md-4  contact_right">
			<img src="../img/logo-ret.png" alt="" class="responsive" />
		</div>
	</div>
</div>
</div>

<div class="footer_bg" id="signup-div"><!-- start signup -->
<div class="container">
	<div class="row footer">
		<div class="col-md-8 contact_left">
			<h3>Create your account</h3>
			<p>You have to be registered and logged in in order to play with your friends at Retention</p>
			<form method="post" id="signup-form" action="../php/register.php">
				<input id="login-signup" type="text" value="Email (Required)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}"/>
				<input id="pwd-signup" type="text" value="Password (1) (Required)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password (1)';}"/>
				<input id="pwd2-signup" type="text" value="Password (2) (Required)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password (2)';}"/>
				<span class="pull-right">
					<i class="fa fa-hashtag" aria-hidden="true"></i>
					<input type="submit" value="Sign up"></input></span>
			</form>
		</div>
		<div class="col-md-4  contact_right">
			<img src="../img/logo-ret.png" alt="" class="responsive" />
		</div>
	</div>
</div>
</div>

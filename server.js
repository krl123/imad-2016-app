var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var htmlPages={
	'page1':
	{
	title: 'Page 1',
	heading: 'General',
	content:  
	`
	<img src="/ui/madi.png" class="img-medium"/>	
	<p>
		I am an IT professional, radio presenter. Love reading, writing, trekking
		</p>
		<p>
		Favorite movies: Saving Private Ryan 
		</p>
		<p>
		Favorite comics: Tintin, Archie, Asterix
		</p>`
},
'page2':{
	title: 'Page 2',
	heading: 'Books',
	content:  
	`
<img src="/ui/madi.png" class="img-medium"/>	
	<p>
		Jeffrey Archer
		</p>
		<p>
		Robin Cook
		</p>
		<p>
		Sidney Sheldon
		</p>
		<p>
		Arthur Hailey
		</p>`
},
'page3':{
	title: 'Page 3',
	heading: 'Places',
	content:  
	`
	<img src="/ui/madi.png" class="img-medium"/>	
	<p>
		Kerala
		</p>
		<p>
		Kulu Manali
		</p>
		<p>
		Munnar
		</p>`
}
};

function createHtmlTemplate(htmlData)
{
	var title=htmlData.title;
	var date=htmlData.date;
	var heading=htmlData.heading;
	var content=htmlData.content;

var htmlTemplate=`
	<html>
<head>
	<title>
	${title}
	</title>
 <link href="/ui/style.css" rel="stylesheet" />
<body>
<div class="container">	
<div>
<a href="/">Home</a>
</div>
	<hr/>
	<h3>${heading}
	</h3>
	<div>	
		<p>
			${content}
		</p>
	</div>
</div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:pageName', function (req, res) {
	var pageName=req.params.pageName;
  res.send(createHtmlTemplate(htmlPages[pageName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

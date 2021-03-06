var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var htmlPages={
	'page1':
	{
	title:'Page 1',
	heading: 'General',
	content:  
	`
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
'page2':
{
	title:'Page 2',
	heading: 'Books',
	content:  
	`
	<p>
		Favorite authors are 
		</p>
		<p>
		Jeffrey Archer
		</p>
		<p>
		Robin Cook
		</p>
		<p>
		Arthur Hailey
		</p>`
},
'page3':
{
	title:'Page 3',
	heading: 'Places',
	content:  
	`
	<p>
	Favorite places are
		</p>
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
	    <title>${title}</title>
	</head>
    <link href="/ui/style.css" rel="stylesheet" />
    <body>
    <br>
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <img id="mainImg" src="/ui/beas.jpg" class="img-medium"/>
        <div class="container">	
    	<h3>${heading}
        </h3>
        	<div>	
        		<p>
        			${content}
        		</p>
        	</div>
        </div>
        <hr/>
        <script type="text/javascript" src="/ui/main.js">
        </script>  
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
	if(pageName==="index"){
	var comments=req.params.comment;}
	else
	{
    res.send(createHtmlTemplate(htmlPages[pageName]));
	}
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/beas.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'beas.jpg'));
});

var comments=[];
app.get('/submit', function(req, res){

	comment=req.query.comment;
	comments.push(comment);
	res.send(JSON.stringify(comments));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
      console.log(`IMAD course app listening on port ${port}!`);
      var d=new Date();
      console.log(d.toString());
});

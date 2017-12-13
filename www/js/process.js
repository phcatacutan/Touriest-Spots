let process = {
	menu:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">TOURIST SPOTS IN PHILIPPINES</div>
              </div>
            </div>
			<ul>
				<p><b>LUZON</b></p>
				<li><a href='#' onClick={process.page1}> Mayon Volcano</a></li>
				<li><a href='#' onClick={process.page2}> Banaue Rice Terreces</a></li>
				<li><a href='#' onClick={process.page3}> Zoobic Safari</a></li>
				<li><a href='#' onClick={process.page4}> Hundred Islands</a></li>
				<li><a href='#' onClick={process.page5}> Enchanted Kingdom </a></li>
				
				<p><b>VISAYAS</b></p>
				<li><a href='#' onClick={process.page6}> Boracay</a></li>
				<li><a href='#' onClick={process.page7}> Chocolate Hills</a></li>
				<li><a href='#' onClick={process.page8}> Camotes Islands</a></li>
				<li><a href='#' onClick={process.page9}> Panglao Island</a></li>
				<li><a href='#' onClick={process.page10}> Cebu Taoist Temple</a></li>

				<p><b>MINDANAO</b></p>
				<li><a href='#' onClick={process.page11}> Mount Apo</a></li>
				<li><a href='#' onClick={process.page12}> Lake Sebu</a></li>
				<li><a href='#' onClick={process.page13}> Naked Island</a></li>
				<li><a href='#' onClick={process.page14}> Maria Cristina Falls</a></li>
				<li><a href='#' onClick={process.page15}> Samal Island</a></li>

			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon Volcano</div>
              </div>
            </div>
	<img src='img/Mayon-Volcano.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>
	Mayon volcano, in SE Luzon, is the most active volcano in the Philippines. Its classic, symmetrical profile, which rises above the Albay Gulf to a height of 2462 m, is the result of a structurally simple volcano where eruptions have occurred from a single central conduit. ... Twelve eruptions have caused fatalities.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
			let content = <div>
			<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Banaue Rice Terreces </div>
              </div>
            </div>
				<img src='img/banaue.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
				 <br/>
The Banaue Rice Terraces (Filipino: Hagdan-hagdang Palayan ng Banawe) are 2,000-year-old terraces that were carved into the mountains of Ifugao in the Philippines by ancestors of the indigenous people. ... It is commonly thought that the terraces were built with minimal equipment, largely by hand.

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>
			<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Zoobic Safari</div>
              </div>
            </div>
			<img src='img/Zoobic.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
		<br/>
		Zoobic Safari is a 25-hectare amusement park presenting a once-in-a-lifetime experience for you and your family. Far from the conventional zoo, Zoobic gives you a chance to meet these wonderful animals up close and personal, promote awareness and concern for their species thru education/information given by our competent Tour Guides, a unique avenue to commune with nature and most of all, experience an adventure like no other here in the country: A close encounter with the biggest members of the cat family. This may very well be the closest  thing to a real animal jungle safari around here in the country.			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	page4:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Hundred Islands</div>
              </div>
            </div>
				<img src='img/hundred-islands.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>	
			Hundred Islands National Park. The Hundred Islands National Park (Pangasinan: Kapulo-puloan or Taytay-Bakes) is a national park in the Philippines. ... The islands, totaling 124 at low tide and 123 at high tide, are scattered in Lingayen Gulf covering an area of 16.76 square kilometres (6.47 sq mi).
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page5:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Enchanted Kingdom</div>
              </div>
            </div>
				<img src='img/Enchanted.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Enchanted Kingdom, often abbreviated EK, is a theme park in the Philippines. It is located in Santa Rosa, Laguna. It has a land area of 25 hectares (62 acres). The park is managed and operated by Enchanted Kingdom Inc.
			Enchanted Kingdom is a member of the International Association of Amusement Parks and Attractions (IAAPA).
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page6:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Boracay</div>
              </div>
            </div>
				<img src='img/boracay.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Boracay is a small island in the Philippines located approximately 315 km (196 mi) south of Manila and 2 km off the northwest tip of Panay Island in Western Visayas region of the Philippines. ... The island is administered by the Philippine Tourism Authority and the provincial government of Aklan.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
page7:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Chocolate Hills</div>
              </div>
            </div>
				<img src='img/Chocolate.PNG' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			There are at least 1,260 hills but there may be as many as 1,776 hills spread over an area of more than 50 square kilometres (20 sq mi). They are covered in green grass that turns brown (like chocolate) during the dry season, hence the name. The Chocolate Hills is a famous tourist attraction of Bohol.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
page8:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Camotes Islands</div>
              </div>
            </div>
				<img src='img/cam.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Camotes Islands is a group of islands in the Camotes Sea, Philippines. The island group is located east of Cebu Island, southwest of Leyte Island, and north of Bohol Island.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
page9:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Panglao Island</div>
              </div>
            </div>
				<img src='img/asa.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			The island has an area of 94.53 square kilometres (36.50 sq mi). It is within Bohol Province, and comprises two municipalities: Dauis and Panglao. Panglao island is located southwest of the island of Bohol and east and south of Cebu.
			Panglao has a terrain that ranges from plain, hilly to mountainous. Panglao is made of Maribojoc limestone, the youngest of the limestone units found in the western area of Bohol. The limestone composition halted the development of an airport as coralline limestone is soluble which causes formation of caves and sinkholes. One interesting geological feature found in the island is the Hinagdanan Cave which has an underground water source. The cave is an important water source as the island has no rivers or lakes.
			Panglao is a popular tourist destination in the Philippines, and includes several small islands, such as Gak-ang, Pontod, and Balicasag.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page10:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Cebu Taoist Temple </div>
              </div>
            </div>
				<img src='img/YEAH.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Cebu Taoist Temple is one of the most visited tourist spots in Visayas. Although it is an 81 steps high which represents 81 chapters in the scriptures of Taoism, many tourists and visitors climb it eagerly to know what’s their fortune written in the fortune sticks. Getting to the top will need your extra energy. Cebu Taoist Temple is located in Cebu, Visayas, Philippines.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page11:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mount Apo</div>
              </div>
            </div>
				<img src='img/apo.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			At 2,954 meters (9,692 ft), Mount Apo is the highest mountain & volcano in the Philippines. It is one of the country's most popular climbing destinations. Several trails lead to the summit, coming from North Cotabato and Davao provinces.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page12:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lake Sebu</div>
              </div>
            </div>
				<img src='img/lake.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Lake Sebu is one of the frequently visited among the tourist spots in Mindanao. Lake Sebu provides quite beautiful scenes: the lake, the birds, misty leaves, the mountains and more. One of the main attraction in Lake Sebu is the Seven Falls Zipline that will give you a top view of 3 out of 7 waterfalls. Lake Sebu also supplies irrigation to Cotabato, Mindanao, Philippines.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page13:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Naked Island</div>
              </div>
            </div>
				<img src='img/images.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Siargao is a tear-drop shaped island in the Philippine Sea situated 800 kilometers southeast of Manila in the province of Surigao del Norte. It has a land area of approximately 437 square kilometres (169 sq mi). The east coast is relatively straight with one deep inlet, Port Pilar. The coastline is marked by a succession of reefs, small points and white, sandy beaches. The neighboring islands and islets have similar landforms.
			The island is composed of municipalities of Burgos, Dapa, Del Carmen, General Luna, San Benito, Pilar, San Isidro, Santa Monica and Socorro.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page14:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Maria Cristina Falls </div>
              </div>
            </div>
				<img src='img/tina.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			Maria Cristina Falls is a majestic and most beautiful among the waterfalls in Mindanao and in the country. This is also called as the Twin Falls since a rock at the top divides the falls into two.  Gazing at the 98 meters drop of powerful waters will fill you with awe. Being developed by Angus VI Hydroelectric Plant, Maria Cristina Falls primarily provides electric power to the City of Iligan, Mindanao, Philippines.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},

	page15:function(){
		let content = <div>
				<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Samal Island</div>
              </div>
            </div>
				<img src='img/sexy.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/>
			If you are looking for a place to go in Mindanao where it is so popular in relaxation and recreational activities, come and visit Samal Island in Davao City. There are around 70 resorts in the island that offers  world-class accommodations. The island is also popular for its white sand beach and clear waters. Monfort Bat Cave which has the largest colony of fruit bats in the world can be found in Samal Island.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},




	loading:function(){
		let content = <div>
					<div align='center'>
						<img src='img/loading.gif' width='100%'/>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	
}
process.loading();
setTimeout(function(){
	process.menu();
},5000);

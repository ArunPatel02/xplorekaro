import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Avatar } from "rsuite";
import Blogslider from "./Blogslider";


const useStyle = makeStyles({
  dateHead: {
    fontSize: "2rem",
  },
  blogHeading: {
    fontSize: "6rem",
    marginBottom: "20px",
  },
  blogSubHeading: {
    fontSize: "2.5rem",
    margin: "60px 0px 10px 0px",
  },
  blogData: {
    fontSize: "1.7rem",
    marginBottom: "20px",
  },
  author: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px",
  },
  blogimage : {
    margin : "30px auto",
    width : "100%",
    display : "flex",
    justifyContent : "center",
  }
});

const BlogDetail = () => {
  const classes = useStyle();
  return (
    <div className="app_container">
    <Box marginTop={"80px"}>
      {/* <div className={classes.dateHead}>2018-03-02 | BY GFXPARTNER</div> */}
      <Grid container>
        <Grid item xs={12}>
          <h1 className={classes.blogHeading}>
          Top 10 Best Places to Explore in India
          </h1>
          <p className={classes.blogData}>India is an enormous and diverse destination.More than 20 official languages, multiple religions and a variety of cuisines exist within India’s borders. To truly experience the breadth of Indian culture and history, travel is key. Head to as many of these best places to visit in Indias as your itinerary allows.</p>
          <h4 className={classes.blogSubHeading}>1. Rajasthan</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/rajasthan.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          Northwest India is where you’ll find the state of Rajasthan, which borders Pakistan and is home to the Thar Desert. Whether you’re interested in Rajput history or views of the Aravallis Mountains, Rajasthan contains some of the best places to visit in India. Jaipur, or the Pink City, is the capital of Rajasthan and a wonderful place to begin your trip.
          </p>
          <p className={classes.blogData}>
          It is home to an array of incredible architecture, including three forts, many temples and the extraordinary City Palace. Also in Rajasthan and worth visiting is Jodhpur, the so-called Blue City that is the gateway to the Thar Desert as well as the home to the spectacular Mehrangarh Fort.
          </p>

          <h4 className={classes.blogSubHeading}>2. Agra</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/agra.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          Agra is one of the most-visited cities in all of India. Once the capital of the Mughal Empire, Agra is now home to the iconic structure known as the Taj Mahal. The white marble mausoleum was built in the 17th century, and it is widely regarded as a monument of love
          </p>
          <p className={classes.blogData}>
          While spectacularly beautiful, the Taj Majal can be very crowded. Also worth seeing in Agra is the Agra Fort, which is very similar to the Red Fort of Delhi. You can tour this 16th century fort and even explore the interior of its beautiful palace.
          </p>

          <h4 className={classes.blogSubHeading}>3. Kerala</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/kerala.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          The southwestern state of India known as Kerala is a place of tropical beauty. Palm trees, white sand beaches and eco-tourism are all big reasons to explore the region. Besides its famous backwaters, elegant houseboats and temple festivals, Kerala is also home to Thekkady, a tiger preserve which allows you to admire flora and fauna without crowds
          </p>
          <p className={classes.blogData}>
          The hub of Kerala is the city of Kochi, where you can see the local fishing industry thriving along with modern high-rises and colonial architecture. Kochi is ethnically and religiously diverse, and in a single afternoon you can explore a Jewish synagogue, a Dutch palace, the Portuguese Pallipuram Fort and the Hindu Thrikkakara Temple.
          </p>

          <h4 className={classes.blogSubHeading}>4. Varanasi</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/tourist-attractions-in-india/varanasi.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          With a history dating back to more than 3,000 years, Varanasi is one of the world’s oldest living cities. Located in North India on the banks of the River Ganges, Varanasi has been an important center of learning for ages as well as a chief pilgrimage destination for many Hindus.
          </p>
          <p className={classes.blogData}>
          Varanasi is regarded as a sacred city among Hindus, Jains and Buddhists because it is believed that dying here releases a person’s soul from the cycle of reincarnation, and that bathing in the River Ganges cleanses one’s sins.
          </p>
          <p className={classes.blogData}>
          Varanasi offers sights and experiences unknown anywhere else in the world. It is nicknamed the “City of Temples” because of its thousands of temples. Some of the most significant are the Kashi Vishwanath Temple of Shiva, the Durga Temple and the Sankat Mochan Hanuman Temple, which is known for housing numerous monkeys.
          </p>
          <p className={classes.blogData}>
          Probably the most famous sites of the city are the ghats, the series of embankment steps leading down to the Ganges River, where many people gather to bathe. The oldest and main ghat is the Dashashwamedh Ghat. The Manikarnika Ghat is a burning ghat where Hindu cremations and rituals of death anniversaries are frequently held. Yoga, shaves and massages are other activities available here. The best way to see the ghats is by taking a morning boat ride at sunrise.
          </p>
          <p className={classes.blogData}>
          Silk weaving is popular in Varanasi, and there are scores of shops and markets selling silk products like sarees and scarves in addition to other handicrafts.
          </p>

          <h4 className={classes.blogSubHeading}>5. Ellora & Ajanta Caves</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/ellora_and_ajanta_caves.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          In the state of Maharashtra, you can explore the caves of both Ellora and Ajanta. At Ellora, there is an enormous complex of shrines carved from the rocky landscape. These 34 cave shrines are up to 1,500 years old, and they are from three distinct religions: Buddhism, Jainism and Hinduism.
          </p>
          <p className={classes.blogData}>
          Two hours away is Ajanta, which is also home to 29 caves. The Ajanta caves are covered in murals and paintings, most of which reflect Buddhist stories. While the two cave complexes are two hours away from one another, it is well worth visiting both to compare these incredible attractions.
          </p>

          <h4 className={classes.blogSubHeading}>6. Delhi</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/delhi.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          If you’re spending any time in Northern India, you will almost certainly visit the capital city of Delhi. The enormous sprawling destination is home to several districts, and it is considered to be one of the oldest cities in the world. One of the top sights in Delhi is the Red Fort, or Lal Qila, which was built in the 17th century.
          </p>
          <p className={classes.blogData}>
          The Red Fort is made from sandstone, and you will be able to walk through its Lahore Gate, into the bazaar, through the jewel palace and even into the former residence of the sultan. While in Delhi, you should also make time for the many museums and religious structures that make up the city.
          </p>

          <h4 className={classes.blogSubHeading}>7. Goa Beaches</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/goa_beaches.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          On the western coast of India is Goa, a former colony of Portugal that blends Indian culture with colonial influences and plenty of international tourism. Goa is popular largely because of its spectacular beaches.
          </p>
          <p className={classes.blogData}>
          The busiest and most popular of all is Candolim Beach, where travelers from around the world flock to soak up the sun. Anjuna Beach, by contrast, is far less crowded. It is also an amazing place where you can walk to Chapora Fort and admire the sandy coastline from a new perspective.
          </p>
          <p className={classes.blogData}>
          Palolem is considered one of the most beautiful beaches in all of Goa with it’s natural bay surrounded by lofty headlands on either sides. Goa is widely loved by adventurers, and recreational activities are plentiful for those eager for some fun in the sun.
          </p>

          <h4 className={classes.blogSubHeading}>8. Ladakh</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/ladakh.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          In northernmost India, in the heavily disputed Kashmir region, is the mountainous destination of Ladakh. This region is large, but it has a low population density and a number of nomadic residents. Breathtaking, pristine scenery is a major draw to the area, but virtually all travelers will also spend time in the town of Leh.
          </p>
          <p className={classes.blogData}>
          The town is located at a very high elevation, and it is also home to the 17th century Palace of the King of Ladakh. Buddhist culture is also prominent in Leh, and you may wish to explore some of the many Buddhist monasteries and temples in the Old Town.
          </p>

          <h4 className={classes.blogSubHeading}>9. Amritsar</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/amritsar.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          In the northern province of Punjab is Amritsar, a holy city and a mecca for the Sikh religion. The main attraction in Amritsar is the Golden Temple, also known as the Harmandir Sahib. Built more than 400 years ago, this temple truly is golden, and it is always packed with Sikhs visiting from around India and the rest of the world.
          </p>
          <p className={classes.blogData}>
          You can tour the Golden Temple regardless of religion, but you will need to show respect by covering your head and removing your shoes. Enter the temple through the Ghanta Ghar, the main entrance, and admire the Amrit Sarovar, a pool surrounding the temple where pilgrims bathe.
          </p>

          <h4 className={classes.blogSubHeading}>Getting Started</h4>
          <div className={classes.blogimage}>
          <img src="https://www.touropia.com/gfx/d/best-places-to-visit-in-india/mysore.jpg" alt="____" />
          </div>
          <p className={classes.blogData}>
          In the southern tip of India, you’ll find the city of Mysore. Once the capital of the Wodeyar dynasty, Mysore is best known for housing the magnificent Mysore Palace. The palace is the epitome of opulence, and a tour through the structure will reveal upscale touches like carved rosewood doors, ceilings decorated in ivory and countless paintings on the walls.
          </p>
          <p className={classes.blogData}>
          If you’re in Mysore, you won’t want to miss the incredible Devaraja Market, an outdoor experience on Dhanwanthri Road where you can buy some chai tea and then browse stalls offering produce or sandalwood carvings
          </p>

          <div>
          <Blogslider imagearray={["https://www.touropia.com/gfx/d/best-places-to-visit-in-india/mysore.jpg" , "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/amritsar.jpg" , "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/ladakh.jpg" , "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/goa_beaches.jpg" , "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/delhi.jpg" ,"https://www.touropia.com/gfx/d/best-places-to-visit-in-india/ellora_and_ajanta_caves.jpg", "https://www.touropia.com/gfx/d/tourist-attractions-in-india/varanasi.jpg",  "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/kerala.jpg", "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/agra.jpg", "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/rajasthan.jpg"]}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} className={classes.author}>
          <Avatar src="http://gfxpartner.com/Frolic/images/guide01.png" />
          <div style={{ fontSize: "2rem", textAlign: "center" }}>
            Arun patel
          </div>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default BlogDetail;

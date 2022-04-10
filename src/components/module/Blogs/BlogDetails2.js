import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Avatar } from "rsuite";
// import Blogslider from "./Blogslider";

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
  blogimage: {
    margin: "30px auto",
    width: "100%",
    display: "flex",
    gap: "30px",
  },
});

const BlogDetails2 = () => {
  const classes = useStyle();
  return (
    <div className="app_container">
    <Box marginTop={"80px"}>
      {/* <div className={classes.dateHead}>2018-03-02 | BY GFXPARTNER</div> */}
      <Grid container>
        <Grid item xs={12}>
          <h1 className={classes.blogHeading}>
            Top unexplored places of India that you must visit in the year 2022
          </h1>
          <p className={classes.blogData}></p>

          <h4 className={classes.blogSubHeading}>Laitmawsiang, Meghalaya</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Laitmawsiang-Meghalaya.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            A trip to Meghalaya usually results in you charting out an itinerary with the most famous places to visit. However, while you're on your journey, try to stop by at Laitmawsiang, a quaint little village in East Khasi Hills, to check out the enchanting garden of Caves. Visit Meghalaya’s Laitmawsiang and feel like you've been transported to a fantasy world as the place has the most beautiful small waterfalls, ponds, water works, all nestled on nature's lap. It is a perfect setting for those who seek to be away from the noise of the city.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Ubbalamadugu Falls, Andhra Pradesh</h4>
          <div className={classes.blogimage}>
            {/* <img src="" alt="____" /> */}
            <p className={classes.blogData}>
            Andhra Pradesh might not be all that famous for its natural beauty but is certainly has a hidden gem that you must explore. Ubbalamadugu Falls might not be all that famous when compared to the Athirapally Falls of Kerala but they definitely stand out as a blissful location, especially for trekkers and hikers. Imagine being wrapped in the serenity of nature as you hear birds chirp and Ubbalamadugu waterfalls while you make your big but shortlived escape from the city's bustle. When you do make your plans to visit Andhra Pradesh, do add Ubbalamadugu Falls to your list of places to visit.
            </p>
          </div>
        
          <h4 className={classes.blogSubHeading}>Arvalem Caves, Goa</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Arvalem-Caves.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            Give yourself a break from Goa's azure blue beaches and head to different locales instead. There is nothing that compares to the joy you will feel as you explore more of Goa and its cultural hotspots. The green valleys of Goa beckon you so give them some attention. In fact, visit the rock cut Arvalem Caves in Goa and relish the historic relevance that they possess. It is believed that these caves were a hideout for the Pandavas during their exile.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Doodhpathri, Kashmir</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Doodhpathri-%20Kashmir.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            Located in an untapped segment of the Budgam district is the exquisite Doodhpathri hill station. The tourist destination is easily one of the finest hidden gems of Kashmir and India. Get yourself postcard-worthy pictures at Doodhpathri with a lush green landscape and adorable sheep in the background. Not to mention how the mountain ranges further add to the beauty of the place and would stand out in your pictures.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Idukki, Kerala</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Idukki-Kerala.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            Kerala manages to make every place a paradise. You visit God's Own Country and you'll be at a loss of words, thanks to the alluring green serenity. They've got fabulous beaches on the Malabar coast and green valleys of the Western Ghats, all encompassed to give tourists a taste at what beauty really means. Nestled away in the hills is one such hidden gem of Kerala, Idukki. From the scenic drive that you'll enjoy to the views of the valleys, Idukki will find a cosy spot in your memory box as one of the best places to visit in Kerala.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Maithon, Jharkhand</h4>
          <div className={classes.blogimage}>
            {/* <img src="" alt="____" /> */}
            <p className={classes.blogData}>
            Jharkhand doesn't come across a traveller's go-to destination. However, they do have some interesting places. Maithon is one such paradisiacal place with white waterfalls that should be explored. There is scope for exploration and room for solitude while you're one with the nature. When you do make vacation plans for Jharkhand, do not miss Maithon as one of the places to visit.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Haflong, Assam</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Haflong-Assam.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            If relaxing and unwinding is what you wish to do during your vacation, then we recommend Haflong in Assam as one of the ideal places to visit. With the natural green landscape interspersed with fresh and sterilized air, there is absolutely nothing that would tick you off in this haven. Get yourself a piping hot cup of chai and sit by the balcony of your accommodation to soak in all the refreshing ambience of Haflong while you admire its celebrated lake.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Chopta, Uttarakhand</h4>
          <div className={classes.blogimage}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/10-hidden-gems-to-visit-in-india/Chopta-Uttarakhand.jpg&w=640&q=75" alt="____" />
            <p className={classes.blogData}>
            There is no dearth of trekking trails when you plan a trip to the North. The Himalayas and travellers with Columbus-blood have managed to explore some brilliant trekking trails in Uttarakhand. Chopta is one such place that also promotes its snow-capped trekking expeditions. You can choose to keep your treks minimal or you can go on a lengthy excursion by camping at Tungnath and Chandrashila. Residing in some of the lovely villages that fall along the way add to the serenity of the place. Chopta is easily one of the must-visit
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Tharangambadi, Tamil Nadu</h4>
          <div className={classes.blogimage}>
            {/* <img src="" alt="____" /> */}
            <p className={classes.blogData}>
            When it comes to Tamil Nadu, many often flock over to Pondicherry or Dhanushkodi or Kanyakumari. However, one of the perfectly hidden delights of the state's tourism comes from the small town of Tharangambadi, a once established Danish colony. Fort Dansborg, perched atop the coastal space of Tharangambadi, is a visual bliss. You would be enthralled by the serenity of the locale and further amazed by the robust structure made out of beige hues. Looking for zen? Visit Tharangambadi's Fort Dansborg to get what you seek.
            </p>
          </div>

          <h4 className={classes.blogSubHeading}>Murud, Maharashtra</h4>
          <div className={classes.blogimage}>
            {/* <img src="" alt="____" /> */}
            <p className={classes.blogData}>
            Murud's fame comes from its strong marine fort, Janjira. Perched atop the water body that connects with the Arabian Sea, the astounding beauty of Murud Janjira as a towering structure by the shores of the quaint town makes it one of the best places to visit in Maharashtra. It is quite the hidden gem that you should check out. Another interesting feature of the fort is that it holds a salt water tank in its premise, a fascinating addition to the lovely place!
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default BlogDetails2;

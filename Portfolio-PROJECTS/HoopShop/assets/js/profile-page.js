// STORE ITEMS
const products = [

  // OFFCOURT
  {
      id: 1,
      imageUrls: [
        "../assets/images/Store-Items/item1/image1.webp",
        "../assets/images/Store-Items/item1/image2.webp",
        "../assets/images/Store-Items/item1/image3.webp",
        "../assets/images/Store-Items/item1/image4.webp",
        "../assets/images/Store-Items/item1/image5.webp",
        "../assets/images/Store-Items/item1/image6.webp"
      ],
      brand: "Nike",
      signature: "Kobe",
      name: "Nike Kids Los Angeles Lakers Kobe Bryant Black Mamba City Edition Swingman Jersey",
      description: "The Nike Kids Los Angeles Lakers Kobe Bryant Black Mamba City Edition Swingman Jersey Black Gold is a Nike Los Angeles Lakers jersey released to commemorate Kobe Bryant's sports career. This sportswear features a subtle black snakeskin pattern with purple and gold trims, 16 stars to honor the number of Laker’s championships, and Kobe’s jersey numbers: 8 on the front and 24 on the rear. Additionally, it features Kobe’s signature above the jock tag. The Nike Kids Los Angeles Lakers Kobe Bryant Black Mamba City Edition Swingman Jersey Black Gold was released on 24th August 2020 at a retail price of $120.",
      price: "CA$234",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },

  // SHOE
  {
      id: 2,
      imageUrls: [
        "../assets/images/Store-Items/item2/image1.webp",
        "../assets/images/Store-Items/item2/image2.webp",
        "../assets/images/Store-Items/item2/image3.webp",
        "../assets/images/Store-Items/item2/image4.webp",
        "../assets/images/Store-Items/item2/image5.webp",
        "../assets/images/Store-Items/item2/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "LeBron Witness 8",
      description: "When you step on the floor, what kind of performance do you want to put on? Stop the show in these LeBron Witness 8s and let them know there are no limits to your flair and full-scale skills. This sleek and boldly sculpted shoe offers stability when exploding and soft landings when you come back to the ground, allowing kingpins like you and LeBron to bound, brake and bolt from baseline to baseline.",
      price: "CA$145",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },

  // BALL 
  {
      id: 3,
      imageUrls: [
        "../assets/images/Store-Items/item3/image1.webp",
        "../assets/images/Store-Items/item3/image2.webp",
        "../assets/images/Store-Items/item3/image3.webp",
        "../assets/images/Store-Items/item3/image4.webp",
        "../assets/images/Store-Items/item3/image5.webp"
      ],
      brand: "Wilson",
      name: "WILSON NBA DRV Series Outdoor Basketballs",
      description: "Inspired by the drive that lives inside every NBA hopeful. The Wilson NBA DRV Basketball is designed for outdoor play and built to stand up to the elements. Inflation retention lining creates longer lasting air retention with this ball designed for ultimate outdoor durability.",
      price: "CA$35",
      prodType: "Ball",
      sizes: ["5", "6", "7"]
  },   
  
  //... ITEMS

  {
      id: 4,
      imageUrls: [
        "../assets/images/Store-Items/item4/image1.webp",
        "../assets/images/Store-Items/item4/image2.webp",
        "../assets/images/Store-Items/item4/image3.webp",
        "../assets/images/Store-Items/item4/image4.webp",
        "../assets/images/Store-Items/item4/image5.webp",
        "../assets/images/Store-Items/item4/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "LeBron XX x Mimi Plange 'Ceremony'",
      description: "Nearly 2 decades into a career exceeding every lofty expectation, LeBron James has refused to settle for anything less than greatness, even when he was the one setting the standard for generations to come. Now, his latest signature shoe is lighter, low to the ground and turbo-like. The LeBron XX (or LeBron 20) is unlike any design LeBron has donned before—comfortable and supportive yet low-cut, feathery-fast and created to stay ahead of today's frenzied style of play.",
      price: "CA$330",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 5,
      imageUrls: [
        "../assets/images/Store-Items/item5/image1.webp",
        "../assets/images/Store-Items/item5/image2.webp",
        "../assets/images/Store-Items/item5/image3.webp",
        "../assets/images/Store-Items/item5/image4.webp",
        "../assets/images/Store-Items/item5/image5.webp",
        "../assets/images/Store-Items/item5/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "Zoom LeBron 2",
      description: "Showcase your game in this 1:1 throwback and celebrate the King's 1st run with the red, white and blue. All-American colours honour the special moment in history—a young LeBron flashing his raw talent—while graphics on the collar and tongue keep the royal detailing you expect. Ballistic fabric on the sides and crisp leather round off the look that shined on the world stage.",
      price: "CA$270",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 6,
      imageUrls: [
        "../assets/images/Store-Items/item6/image1.webp",
        "../assets/images/Store-Items/item6/image2.webp",
        "../assets/images/Store-Items/item6/image3.webp",
        "../assets/images/Store-Items/item6/image4.webp",
        "../assets/images/Store-Items/item6/image5.webp",
        "../assets/images/Store-Items/item6/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "LeBron XXI 'Freshwater'",
      description: "Last time around, LeBron flipped the script on his shoe game as only the King can. The encore is even better. The LeBron XXI has a cabling system that works with Zoom Air cushioning and a light, low-to-the-ground design, giving you agile fluidity and explosiveness without excess weight. Created for your ascent and the next generation of hoopers, it's ideal for Bron-like open-floor attacks and rising towards the rim when the game's pace turns up. We derived this special design from the freshwater pearl, with its rainbow scope of natural pastel colours, including lush Lavender.",
      price: "CA$260",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 7,
      imageUrls: [
        "../assets/images/Store-Items/item7/image1.webp",
        "../assets/images/Store-Items/item7/image2.webp",
        "../assets/images/Store-Items/item7/image3.webp",
        "../assets/images/Store-Items/item7/image4.webp",
        "../assets/images/Store-Items/item7/image5.webp",
        "../assets/images/Store-Items/item7/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "LeBron XXI 'Tahitian'",
      description: "Last time around, LeBron flipped the script on his shoe game as only the King can. The encore is even better. With Air Zoom units and soft cushioning, the LeBron XXI (also known as the LeBron 21) gives you flexibility and power without a lot of excess weight to slow you down. Ideal for rim runs, fast breaks and racing up and down the court, they help you keep playing at the top of your game until the final buzzer sounds. Are you ready to play?",
      price: "CA$185",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 8,
      imageUrls: [
        "../assets/images/Store-Items/item8/image1.webp",
        "../assets/images/Store-Items/item8/image2.webp",
        "../assets/images/Store-Items/item8/image3.webp",
        "../assets/images/Store-Items/item8/image4.webp",
        "../assets/images/Store-Items/item8/image5.webp",
        "../assets/images/Store-Items/item8/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "LeBron XX",
      description: "There's a reason LeBron James is considered one of the best. From racking up MVPs to winning championships, the King has shattered expectations on the court for nearly 2 decades. Celebrate that dominance in the LeBron XX (or LeBron 20), the 20th edition of his signature shoe. With Zoom Air cushioning and a super-lightweight feel, they'll help you run, jump and compete until the final buzzer sounds.",
      price: "CA$185",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 9,
      imageUrls: [
        "../assets/images/Store-Items/item9/image1.webp",
        "../assets/images/Store-Items/item9/image2.webp",
        "../assets/images/Store-Items/item9/image3.webp",
        "../assets/images/Store-Items/item9/image4.webp",
        "../assets/images/Store-Items/item9/image5.webp",
        "../assets/images/Store-Items/item9/image6.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "Men's Storm-FIT ADV Jacket",
      description: "Game-changing and always evolving, LeBron James pushes the boundaries of innovation in both his game and his personal style. Our LeBron collection brings the King's signature logo to life on styles any hoops fan will love, with graphics by contemporary artist Jacob Rochester. Crowned by LeBron's lion crest and crown logo, these stamps are made only for the kings and queens of the court. Plus, Nike Storm-FIT ADV technology combines windproof and waterproof fabric with advanced engineering and features to help keep you comfortable in harsh weather conditions.",
      price: "CA$390",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 10,
      imageUrls: [
        "../assets/images/Store-Items/item10/image1.webp",
        "../assets/images/Store-Items/item10/image2.webp"
      ],
      brand: "Nike",
      signature: "Lebron",
      name: "Los Angeles Lakers Icon Edition 2022/23",
      description: "Every team has its true colours, an unmistakable identity that sets it apart from the rest of the league. This Los Angeles Lakers jersey matches what the players wear on the hardwood, from team details to sweat-wicking fabric with plenty of stretch. Designed for play at the highest level, it helps keep you dry and moving freely while you rep your favourite pro.",
      price: "CA$240",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 11,
      imageUrls: [
        "../assets/images/Store-Items/item11/image1.webp",
        "../assets/images/Store-Items/item11/image2.webp",
        "../assets/images/Store-Items/item11/image3.webp",
        "../assets/images/Store-Items/item11/image4.webp",
        "../assets/images/Store-Items/item11/image5.webp",
        "../assets/images/Store-Items/item11/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Giannis Immortality 3",
      description: "How do you want your game to be remembered? Preserve your place among the greats, like Giannis, in the Giannis Immortality 3. Mindfully made for today's high-paced, position-less game, it's softer than the previous iteration with a specific traction pattern that's perfect for pulling off the perfect Euro step en route to glory.",
      price: "CA$120",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 12,
      imageUrls: [
        "../assets/images/Store-Items/item12/image1.webp",
        "../assets/images/Store-Items/item12/image2.webp",
        "../assets/images/Store-Items/item12/image3.webp",
        "../assets/images/Store-Items/item12/image4.webp",
        "../assets/images/Store-Items/item12/image5.webp",
        "../assets/images/Store-Items/item12/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Freak 4",
      description: "Put up monster numbers. Feel like an MVP. And now, play like a champ with the Freak 4. Giannis's 4th signature shoe comes packed with the finest of the Freak's game. Made to feel ultra-comfy and fast on the court, plus details designed just for the All-Star, carry the swag of everything Giannis when it's time to hoop.",
      price: "CA$125",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 13,
      imageUrls: [
        "../assets/images/Store-Items/item13/image1.webp",
        "../assets/images/Store-Items/item13/image2.webp",
        "../assets/images/Store-Items/item13/image3.webp",
        "../assets/images/Store-Items/item13/image4.webp",
        "../assets/images/Store-Items/item13/image5.webp",
        "../assets/images/Store-Items/item13/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Freak 5",
      description: "Giannis's internal engine revs from deep within, requiring a shoe that can harness his superpower abilities. Enter the Freak 5. Stacked with stunning speed for super-quick first steps, stuffed with that sort of springy cushioning that can withstand the all-game grind, his signature shoe lets you feel like the Greek Freak. Blow past your opponent en route to the rim while sticking with quick-twitch ball-handlers when a defensive stand decides the game.",
      price: "CA$180",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 14,
      imageUrls: [
        "../assets/images/Store-Items/item14/image1.webp",
        "../assets/images/Store-Items/item14/image2.webp",
        "../assets/images/Store-Items/item14/image3.webp",
        "../assets/images/Store-Items/item14/image4.webp",
        "../assets/images/Store-Items/item14/image5.webp",
        "../assets/images/Store-Items/item14/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Freak 5 'Loyalty'",
      description: "From a fresh-faced rookie to raising a banner in the rafters, Giannis has always kept it real. This design honours the rich heritage of the Freak's franchise while a special gold Swoosh logo nods to the championship glory Giannis helped bring his fans. Stacked with speed for quick first steps and stuffed with springy cushioning that can withstand the all-game grind, the Freak 5 can help you channel your inner Greek Freak.",
      price: "CA$125",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 15,
      imageUrls: [
        "../assets/images/Store-Items/item15/image1.webp",
        "../assets/images/Store-Items/item15/image2.webp",
        "../assets/images/Store-Items/item15/image3.webp",
        "../assets/images/Store-Items/item15/image4.webp",
        "../assets/images/Store-Items/item15/image5.webp",
        "../assets/images/Store-Items/item15/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Men's Velour Full-Zip Jacket",
      description: "Elevate your off-court look with this full-zip velour jacket from the Giannis Collection. Not just any jacket, this plush full-zip jacket has a relaxed fit and brings cosy warmth to a new level. Designed with a crest that honours his roots, we celebrate his journey from Nigeria to Greece to becoming a superstar in the US.",
      price: "CA$140",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 16,
      imageUrls: [
        "../assets/images/Store-Items/item16/image1.webp",
        "../assets/images/Store-Items/item16/image2.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Milwaukee Bucks Icon Edition 2022/23",
      description: "Every team has its true colours, an unmistakable identity that sets it apart from the rest of the league. Honouring a rich hoops heritage, this Milwaukee Bucks jersey is inspired by what the pros wear on the hardwood, from squad details to lightweight, sweat-wicking mesh. It helps keep you dry and cool on or off the court while you rep your favourite player and the game you love.",
      price: "CA$150",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 17,
      imageUrls: [
        "../assets/images/Store-Items/item17/image1.webp",
        "../assets/images/Store-Items/item17/image2.webp",
        "../assets/images/Store-Items/item17/image3.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Giannis Standard Issue",
      description: "To fully understand Giannis Antetokounmpo's greatness, you have to know where he came from. From his roots in Nigeria to growing up in Greece, Giannis's story takes centre stage on this sweatshirt. Native flowers display his connection to both countries, while the intertwining stems represent growth. Designed with the Freak logo and sweat-wicking French terry, we celebrate his journey to being an all-star, MVP and champion.",
      price: "CA$100",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 18,
      imageUrls: [
        "../assets/images/Store-Items/item18/image1.webp",
        "../assets/images/Store-Items/item18/image2.webp",
        "../assets/images/Store-Items/item18/image3.webp",
        "../assets/images/Store-Items/item18/image4.webp",
        "../assets/images/Store-Items/item18/image5.webp",
        "../assets/images/Store-Items/item18/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Giannis Antetokounmpo Milwaukee Bucks 2023/24 City Edition",
      description: "During the 2021 playoff run, Bucks fans flooded the Deer District to celebrate the team's first championship in 50 years. The inspiration for Milwaukee's 2023/24 City Edition Jersey comes directly from its arena and the fans that make the neighbourhood one of the best gathering places in the league.",
      price: "CA$390",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 19,
      imageUrls: [
        "../assets/images/Store-Items/item19/image1.webp",
        "../assets/images/Store-Items/item19/image2.webp",
        "../assets/images/Store-Items/item19/image3.webp",
        "../assets/images/Store-Items/item19/image4.webp",
        "../assets/images/Store-Items/item19/image5.webp",
        "../assets/images/Store-Items/item19/image6.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Giannis Standard Issue",
      description: "To fully understand Giannis Antetokounmpo's greatness, you have to understand where he came from. From his roots in Nigeria to growing up in Greece, we show that journey on these Giannis basketball trousers. Native flowers display that connection to both countries, while the intertwining stems represent growth. Designed with the Freak logo and sweat-wicking French terry, they celebrate his journey to becoming an All-Star, MVP and champion.",
      price: "CA$115",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 20,
      imageUrls: [
        "../assets/images/Store-Items/item20/image1.webp",
        "../assets/images/Store-Items/item20/image2.webp",
        "../assets/images/Store-Items/item20/image3.webp",
        "../assets/images/Store-Items/item20/image4.webp",
        "../assets/images/Store-Items/item20/image5.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Unisex Curry 4 Low FloTro Basketball Shoes",
      description: "We added the light, grippy speed of UA Flow cushioning to the locked-in control of your favorite Curry 4's low knit and leather upper. Why? Because this unreal combo puts you a step ahead all game long.",
      price: "CA$170",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 21,
      imageUrls: [
        "../assets/images/Store-Items/item21/image1.webp",
        "../assets/images/Store-Items/item21/image2.webp",
        "../assets/images/Store-Items/item21/image3.webp",
        "../assets/images/Store-Items/item21/image4.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Unisex Curry 2 Retro Basketball Shoes",
      description: "Own the court in the original Curry 2s—back for a special, limited re-release. Make every cut more powerful with shock-absorbing cushioning and the custom-fit of a foot-hugging UA Speedform upper.",
      price: "CA$180",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 22,
      imageUrls: [
          "../assets/images/Store-Items/item22/image1.webp",
          "../assets/images/Store-Items/item22/image2.webp",
          "../assets/images/Store-Items/item22/image3.webp",
          "../assets/images/Store-Items/item22/image4.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Unisex Curry 11 'Future Curry' Basketball Shoes",
      description: "Stephen Curry proved that when you do your thing, you can do anything. And the Curry 11 'Future Curry' is specifically designed for everyone to find their flow and do their thing.",
      price: "CA$190",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 23,
      imageUrls: [
        "../assets/images/Store-Items/item23/image1.webp",
        "../assets/images/Store-Items/item23/image2.webp",
        "../assets/images/Store-Items/item23/image3.webp",
        "../assets/images/Store-Items/item23/image4.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Men's Curry Fleece Sleeveless Hoodie",
      description: "Everything I put my name on has to be good—it has to help you play and it has to support our mission to change the game for good. – Stephen Curry",
      price: "CA$65",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 24,
      imageUrls: [
        "../assets/images/Store-Items/item24/image1.webp",
        "../assets/images/Store-Items/item24/image2.webp",
        "../assets/images/Store-Items/item24/image3.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Unisex Curry ArmourDry™ Playmaker Mid-Crew Socks",
      description: "Everything I put my name on has to be good—it has to help you play and it has to support our mission to change the game for good. – Stephen Curry",
      price: "CA$25",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 25,
      imageUrls: [
        "../assets/images/Store-Items/item25/image1.webp",
        "../assets/images/Store-Items/item25/image2.webp",
        "../assets/images/Store-Items/item25/image3.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Unisex Curry ArmourDry™ Playmaker Mid-Crew Socks",
      description: "Everything I put my name on has to be good—it has to help you play and it has to support our mission to change the game for good. – Stephen Curry",
      price: "CA$25",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 26,
      imageUrls: [
        "../assets/images/Store-Items/item26/image1.webp",
        "../assets/images/Store-Items/item26/image2.webp",
        "../assets/images/Store-Items/item26/image3.webp",
        "../assets/images/Store-Items/item26/image4.webp"
      ],
      brand: "Under Armour",
      signature: "Curry",
      name: "Men's Curry Logo Heavyweight Short Sleeve",
      description: "Everything I put my name on has to be good—it has to help you play and it has to support our mission to change the game for good. – Stephen Curry",
      price: "CA$60",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 27,
      imageUrls: [
          "../assets/images/Store-Items/item27/image1.webp",
          "../assets/images/Store-Items/item27/image2.webp",
          "../assets/images/Store-Items/item27/image3.webp",
          "../assets/images/Store-Items/item27/image4.webp",
          "../assets/images/Store-Items/item27/image5.webp",
          "../assets/images/Store-Items/item27/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Air Jordan XXXVIII 'Fundamental'",
      description: "Black, white and red. What is it about this color combination that hits so hard? Maybe it’s in our DNA—they’re the first three colors babies can see, after all. Maybe it’s the iconic connection to Jordan Brand heritage, as close to a bloodline as a colorway can get. Or maybe they just look really good together.",
      price: "CA$200",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 28,
      imageUrls: [
          "../assets/images/Store-Items/item28/image1.webp",
          "../assets/images/Store-Items/item28/image2.webp",
          "../assets/images/Store-Items/item28/image3.webp",
          "../assets/images/Store-Items/item28/image4.webp",
          "../assets/images/Store-Items/item28/image5.webp",
          "../assets/images/Store-Items/item28/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Zion 3 Mud, Sweat and Tears",
      description: "Out-of-this-world talent. Down-to-earth heart. These special edition kicks celebrate Zion's commitment to being the best he can be. Lightweight and supportive, they feature colors and details inspired by Zion's on-court footwear, bringing that extraterrestrial swag to your kiddo's rotation.",
      price: "CA$90",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 29,
      imageUrls: [
          "../assets/images/Store-Items/item29/image1.webp",
          "../assets/images/Store-Items/item29/image2.webp",
          "../assets/images/Store-Items/item29/image3.webp",
          "../assets/images/Store-Items/item29/image4.webp",
          "../assets/images/Store-Items/item29/image5.webp",
          "../assets/images/Store-Items/item29/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Tatum 1 Wave Runner",
      description: "Your love for the game never fades. That's why the Tatum 1 was created with longevity in mind. Designed to carry you from the first through the fourth as efficiently as possible, we stripped it down to the essentials—and made those essentials really, really good. The result is this season's lightest performance basketball shoe, with rubber only where it counts, a stress-tested foam midsole and an uncaged Nike Zoom Air unit for those explosive ups. Whatever stage of ball you're at, the Tatum 1 will keep you playing.",
      price: "CA$120",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 30,
      imageUrls: [
          "../assets/images/Store-Items/item30/image1.webp",
          "../assets/images/Store-Items/item30/image2.webp",
          "../assets/images/Store-Items/item30/image3.webp",
          "../assets/images/Store-Items/item30/image4.webp",
          "../assets/images/Store-Items/item30/image5.webp",
          "../assets/images/Store-Items/item30/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Luka 2 Bred",
      description: "This special edition takes serious cues from a classic colorway: The AJ4 Cement. Black, grey and pops of red come through just as hard on the Luka 2, bridging an iconic look with modern performance. It's built to support your skills, with an emphasis on step-backs, side-steps and quick-stop action. Lace up—it's your turn to make history.",
      price: "CA$130",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 31,
      imageUrls: [
          "../assets/images/Store-Items/item31/image1.webp",
          "../assets/images/Store-Items/item31/image2.webp",
          "../assets/images/Store-Items/item31/image3.webp",
          "../assets/images/Store-Items/item31/image4.webp",
          "../assets/images/Store-Items/item31/image5.webp",
          "../assets/images/Store-Items/item31/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Air Jordan 5 x A Ma Maniére",
      description: "Jordan and A Ma Maniére come together again for an elegant take on the already iconic AJ5. Design details of the beloved shoe—check out the collar shape and tongue height—have been further refined for a sophisticated look. Premium materials and custom accents round out the execution, giving you a stunning recreation of a timeless classic.",
      price: "CA$225",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 32,
      imageUrls: [
          "../assets/images/Store-Items/item32/image1.webp",
          "../assets/images/Store-Items/item32/image2.webp",
          "../assets/images/Store-Items/item32/image3.webp",
          "../assets/images/Store-Items/item32/image4.webp",
          "../assets/images/Store-Items/item32/image5.webp",
          "../assets/images/Store-Items/item32/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Jordan One Take 4",
      description: "Get that speed you need, just like Russ. Inspired by Russell Westbrook's latest signature shoe, the outsole of the Jordan One Take 4 wraps up nearly to the midsole so you can start, stop or change direction in an instant. Meanwhile, energy-returning Zoom Air cushioning in the forefoot keeps you goin' (and goin', and goin').",
      price: "CA$85",
      prodType: "Shoe",
      shoeSizes: [ // Add shoe sizes here
          { US: 'M 7 / W 8.5', UK: '6', EU: '40' },
          { US: 'M 7.5 / W 9', UK: '6.5', EU: '40.5' },
          { US: 'M 8 / W 9.5', UK: '6.5', EU: '40.5' },
          { US: 'M 8.5 / W 10', UK: '7', EU: '41.5' },
          { US: 'M 9 / W 10.5', UK: '7', EU: '41.5' },
          { US: 'M 9.5 / W 11', UK: '7', EU: '41.5' },
          { US: 'M 10 / W 11.5', UK: '7', EU: '41.5' },
          { US: 'M 10.5 / W 12', UK: '7', EU: '41.5' },
          { US: 'M 11 / W 12.5', UK: '7', EU: '41.5' },
          { US: 'M 11.5 / W 13', UK: '7', EU: '41.5' },
          { US: 'M 12 / W 13.5', UK: '7', EU: '41.5' },
      ],
  },
  {
      id: 33,
      imageUrls: [
        "../assets/images/Store-Items/item33/image1.webp",
        "../assets/images/Store-Items/item33/image2.webp",
        "../assets/images/Store-Items/item33/image3.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Everyday Ankle Socks (3 Pairs)",
      description: "These ankle socks will keep you dry and cool with sweat-wicking fabric and breathable ankle panels. They're snug around the arch to give you that extra-supportive feel.",
      price: "CA$24",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 34,
      imageUrls: [
        "../assets/images/Store-Items/item34/image1.webp",
        "../assets/images/Store-Items/item34/image2.webp",
        "../assets/images/Store-Items/item34/image3.webp",
        "../assets/images/Store-Items/item34/image4.webp",
        "../assets/images/Store-Items/item34/image5.webp",
        "../assets/images/Store-Items/item34/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Women's Fleece Hoodie",
      description: "We all contain multitudes. Your hoodie should, too. This one has hidden snaps along the shoulder that let you change up your sleeve length—opt for more coverage or rock a cut-off look. Sweat-wicking fabric and a roomy fit up the versatility even further, for a hoodie that's as well rounded as you are.",
      price: "CA$85",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 35,
      imageUrls: [
        "../assets/images/Store-Items/item35/image1.webp",
        "../assets/images/Store-Items/item35/image2.webp",
        "../assets/images/Store-Items/item35/image3.webp",
        "../assets/images/Store-Items/item35/image4.webp",
        "../assets/images/Store-Items/item35/image5.webp",
        "../assets/images/Store-Items/item35/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Women's Diamond Shorts",
      description: "One of our favorite silhouettes gets smooth and satiny for the summertime. Inspired by MJ's iconic pro uniform, these versatile shorts feature airy mesh along the hems and eye-catching diamond side panels. A drawcord waist and roomy legs make 'em an easy choice.",
      price: "CA$60",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 36,
      imageUrls: [
        "../assets/images/Store-Items/item36/image1.webp",
        "../assets/images/Store-Items/item36/image2.webp",
        "../assets/images/Store-Items/item36/image3.webp",
        "../assets/images/Store-Items/item36/image4.webp",
        "../assets/images/Store-Items/item36/image5.webp",
        "../assets/images/Store-Items/item36/image6.webp"
      ],
      brand: "Nike",
      signature: "Jordan",
      name: "Jordan Dri-FIT Sport Crossover",
      description: "Whether you're hanging or hooping, stay fly in this relaxed hoodie. Made with lightweight fleece and Dri-FIT sweat-wicking technology, it'll keep you fresh and ready for every opportunity that arises.",
      price: "CA$68",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 37,
      imageUrls: [
        "../assets/images/Store-Items/item37/image1.webp",
        "../assets/images/Store-Items/item37/image2.webp"
      ],
      brand: "Jordan",
      signature: "Jordan",
      name: "Jordan Playground 8P",
      description: "Durable rubber exterior means you're set to tear it up outdoors, and deep channels mean you get optimal control. So get out there and ball.",
      price: "CA$68",
      prodType: "Ball",
      sizes: ["5", "6", "7"]
  },
  {
      id: 38,
      imageUrls: [
        "../assets/images/Store-Items/item38/image1.webp",
        "../assets/images/Store-Items/item38/image2.webp"
      ],
      brand: "Nike",
      signature: "Nike",
      name: "Nike Premium Energy",
      description: "Take your game to the next level no matter what court you're on—this basketball is made for both indoor and outdoor surfaces.",
      price: "CA$30",
      prodType: "Ball",
      sizes: ["5", "6", "7"]
  },
  {
      id: 39,
      imageUrls: [
        "../assets/images/Store-Items/item39/image1.webp",
        "../assets/images/Store-Items/item39/image2.webp"
      ],
      brand: "Nike",
      signature: "Giannis",
      name: "Giannis Playground 8P",
      description: "You know why you're here: relentless practice, routine and hard work—the keys to you and your team's success. Realize your dreams with the Giannis Playground 8P Basketball that has a durable design for pounding the blacktop every single day.",
      price: "CA$30",
      prodType: "Ball",
      sizes: ["5", "6", "7"]
  },
  {
      id: 40,
      imageUrls: [
        "../assets/images/Store-Items/item40/image1.webp",
        "../assets/images/Store-Items/item40/image2.webp"
      ],
      brand: "Nike",
      signature: "Nike",
      name: "Nike Elite Championship 8P",
      description: "The Nike Elite Championship 8P Basketball is made with durable composite leather. Soft material has incredible touch for playing indoors. Deep channels and non-slip logos let you handle the ball with precision and control.",
      price: "CA$75",
      prodType: "Ball",
      sizes: ["5", "6", "7"]
  },
  {
      id: 41,
      imageUrls: [
        "../assets/images/Store-Items/item41/image1.webp",
        "../assets/images/Store-Items/item41/image2.webp"
      ],
      brand: "Nike",
      signature: "Curry",
      name: "Unisex Golden State Warriors Stephen Curry Nike Royal Swingman Jersey - Icon Edition",
      description: "Capture your team's distinct identity in a new and innovative design when you grab this Stephen Curry Golden State Warriors Icon Edition Swingman Jersey from Nike. Directly inspired by Nike's Authentic jersey, it features classic trim and team graphics along with Nike's Dri-FIT technology for added comfort. Before you head to the next Golden State Warriors game, grab this incredible jersey so everyone knows your fandom is on the cutting edge.",
      price: "CA$119",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },
  {
      id: 42,
      imageUrls: [
        "../assets/images/Store-Items/item42/image1.webp",
        "../assets/images/Store-Items/item42/image2.webp"
      ],
      brand: "Chicago Bulls",
      signature: "Curry",
      name: "Chicago Bulls Michael Jordan Mitchell & Ness Black/Red 1996-97 Hardwood Classics Authentic Jersey",
      description: "This sleeveless jersey features a stitched tackle twill applique and embroidered NBA logo that resembles what MJ wore during the 1997-98 season where he led the Chicago Bulls to their sixth NBA Championship. When they feel that mesh fabric with the famous #23 on the back, they'll know the appreciation being shown for one of the greatest basketball players of all time is next to none.",
      price: "CA$174",
      prodType: "OffCourt",
      sizes: ["S", "M", "L", "XL"]
  },

];

//-------- STORE ITEMS


// Helper functions
// Helper function to fetch user details
async function fetchUserDetails() {
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/user-details', {
      method: 'GET',
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("User details fetched: ", data); // Log the fetched data for debugging
    return data.userDetails;
  } catch (error) {
    console.error('Could not fetch user details:', error);
    return null; // Return null in case of an error
  }
}


// Function to fetch user addresses
async function fetchUserAddresses() {
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/user-addresses', {
      method: 'GET',
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.addresses);
    return data.addresses || [];
  } catch (error) {
    console.error('Could not fetch user addresses:', error);
    return [];
  }
}


// Function to dynamically update profile content
async function updateProfileContent(headerText) {
  // Fetch user details from the backend
  const user = await fetchUserDetails();
  if (!user) return; // Exit if fetch fails

  // Define content based on headerText
  let content = '';
  let description = '';

  switch (headerText) {
    case 'Account Details':
      description = 'Manage account details, password, and email settings.';
      // Content for 'Account Details'
      content = `
      <div class="account-details-container"> 
          <h2>${user.firstName || ''} ${user.lastName || ''}</h2>
          <hr>
          <h4 style="margin-bottom:20px">Profile Information</h4>
          <form id="update-name-form">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="firstName" placeholder="Enter new first name" value="" required>
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="lastName" placeholder="Enter new last name" value="" required>
            <button type="submit">Save</button>
          </form>
          <hr>
          <h4>Email Address</h4>
          <p><a href="#" id="change-email">Change Email</a> | <a href="#" id="change-password">Change Password</a></p>
          <div id="email-address-section"></div>
          <div id="password-section"></div>
      </div>
      `;
      break;

    case 'Your Orders':
      // Content for 'Your Orders'
      description = 'Review and track your orders.';
      content = `
        <h5 style="color:grey; margin-top:10%; margin-bottom: 5%">You have no orders at this time. Once you place an order, you'll be able to view and track it here.</h5>
      `;
      break;

    case 'Your Addresses':
      description = 'Manage your shipping and billing addresses.';
      const freshAddresses = await fetchUserAddresses();
      addressesContent = freshAddresses.length === 0
        ? '<p class="no-addresses">You have not saved any addresses.</p>'
        : renderAddressesList(freshAddresses);

      content = `
        <h3 style="margin-bottom: 20px">Your Addresses</h3>
        <div class="addresses-list">${addressesContent}</div>
        <h4>Add New Address</h4>
        <form id="add-address-form" style="margin-top: 20px">
          <input type="text" id="street" name="street" placeholder="Street Address">
          <input type="text" id="city" name="city" placeholder="City">
          <input type="text" id="country" name="country" placeholder="Country">
          <input type="number" id="phonenumber" name="phonenumber" placeholder="Phone Number">
          <input type="zipcode" id="zipcode" name="zipcode" placeholder="Zipcode">
          <button type="submit">Add Address</button>
        </form>
      `;

        // Update the DOM with the new content first
      document.getElementById('profile-content-js').innerHTML = content;

      // Now that '.addresses-list' is in the DOM, update its content
      document.querySelector('.addresses-list').innerHTML = addressesContent;

      break;
    
    case 'Your Payments':
      description = 'Here you can manage your payment methods.';
      content = `
        <p style="color: grey">In a live environment, this page would allow you to save and manage your payment methods securely. For demonstration purposes, payment processing is not enabled.</p>
        <p style="color: grey">To add a new payment method, you would typically enter your payment details in a secure form provided by a payment service like Stripe. All transactions would be processed using industry-standard encryption and security measures.</p>
        <div class="payment-methods-list" style="padding-left: 20px">
        <h5 style="margin-top: 25px; margin-bottom: 10px">Payment Methods</h5>
          <p><i>No payment methods on file.</i></p>
          <button class="demo-button" disabled style="margin-top: 30px; max-width: 200px">Add Payment Method</button>
        <p class="demo-disclaimer">*This is a demo feature. No real transactions will be processed.</p>
        </div>
        
      `;
    
      // Insert the new content into the DOM
      document.getElementById('profile-content-js').innerHTML = content;
      document.getElementById('profile-content-header').textContent = headerText;
      document.getElementById('profile-content-descrpt').textContent = description;
      document.getElementById('profile-content-descrpt').style.marginBottom = "50px";
      break;
    
      case 'Gift Cards':
        description = 'Choose the perfect gift card for friends, family, or colleagues. Select from various styles and amounts to suit any occasion.';
        content = `
          <div class="gift-card-section">
            <h3>Gift Cards</h3>
            <div class="gift-card-amount">
              <h4>Select Amount</h4>
              <button>$50</button>
              <button>$150</button>
              <button>$300</button>
              <button id="custom-amount-btn">Custom</button>
              <input type="number" id="custom-amount" placeholder="Enter custom amount" style="display:none; margin-top: 10px;" />
            </div>
            <div class="gift-card-form">
              <h4>Sender Info</h4>
              <label for="from">From:</label>
              <input type="text" id="from" placeholder="Your name">
              <label for="to">To:</label>
              <input type="text" id="to" placeholder="Recipient's name">
              <label for="message">Message:</label>
              <textarea id="message" placeholder="Write your message"></textarea>
            </div>
            <div class="gift-card-delivery">
              <h4>Delivery Info</h4>
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="Recipient's email">
              <label for="delivery-date">Deliver on date:</label>
              <input type="date" id="delivery-date">
            </div>
            <button class="demo-button" disabled>Send Gift Card</button>
            <p class="demo-disclaimer">*This feature is a demo and not currently active.</p>
          </div>
        `;
      
        // Insert the new content into the DOM
        document.getElementById('profile-content-js').innerHTML = content;
        document.getElementById('profile-content-header').textContent = headerText;
        document.getElementById('profile-content-descrpt').textContent = description;
        document.getElementById('profile-content-descrpt').style.marginBottom = "50px";

        // Use event delegation for the custom amount button
        document.getElementById('profile-content-js').addEventListener('click', function(event) {
          if (event.target && event.target.id === 'custom-amount-btn') {
            document.getElementById('custom-amount').style.display = 'block'; // Show the custom amount input
          }
        });
        break;
      
        
    // Cases for other headers...
  }

  // Update the DOM
  
  document.getElementById('profile-content-js').innerHTML = content;
  document.getElementById('profile-content-header').textContent = headerText;
  document.getElementById('profile-content-descrpt').textContent = description; // Update the description
  document.getElementById('profile-content-descrpt').style.marginBottom = "50px";

  // Reattach event listeners for dynamic content
  document.getElementById('update-name-form')?.addEventListener('submit', handleNameUpdate);
  attachDynamicEventListeners();
  // Attach more listeners if needed...

  if (headerText === 'Your Addresses') {

     // Update the DOM with the fresh list of addresses
     document.querySelector('.addresses-list').innerHTML = addressesContent;

    document.getElementById('add-address-form').addEventListener('submit', handleAddAddress);

    // Attach event listener to the addresses list for deletion
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-button')) {
        // Retrieve the addressId stored in the data-address-id attribute
        const addressId = event.target.getAttribute('data-address-id');
        if (addressId) {
          handleDeleteAddress(addressId);
        } else {
          console.error('Delete button clicked, but no address ID found');
        }
      }
    });
    
    
  }
}



// Function to dynamically generate the addresses list with delete buttons
function renderAddressesList(addresses) {
  return addresses.map(address => `
    <div class="address-entry">
      <p>${address.street}, ${address.city}, ${address.country}</p>
      <button class="delete-button" data-address-id="${address.address_id}">Delete</button>
    </div>
  `).join('');
}




async function handleLogout() {
  try {
  const response = await fetch('https://hoopshop.mammani.com/api/logout', {
    method: 'POST',
    credentials: 'include', // Required for cookies to be sent
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  // Show user feedback with success message
  showUserFeedback(data.message || 'You have been logged out successfully.', true);

  // Redirect to home page after the message is shown and the popup is hidden
  setTimeout(() => {
    window.location.href = '../index.html';
  }, 700); // Wait for the popup to hide

  } catch (error) {
    // If logout fails, show error feedback
    showUserFeedback(error, false);
  }
}

function showUserFeedback(responseMessage, isSuccess) {
  // Create the feedback popup container
  const feedbackPopup = document.createElement('div');
  feedbackPopup.id = 'user-feedback-popup';
  feedbackPopup.style.position = 'fixed';
  feedbackPopup.style.left = '50%';
  feedbackPopup.style.bottom = '20px';
  feedbackPopup.style.transform = 'translateX(-50%)';
  feedbackPopup.style.backgroundColor = isSuccess ? 'green' : 'red';
  feedbackPopup.style.color = 'white';
  feedbackPopup.style.padding = '10px 20px';
  feedbackPopup.style.borderRadius = '5px';
  feedbackPopup.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  feedbackPopup.style.zIndex = '1000';
  feedbackPopup.textContent = responseMessage;
  
  // Append the popup to the body
  document.body.appendChild(feedbackPopup);

  // Make the popup slide up from the bottom
  feedbackPopup.animate([
    { bottom: '-50px', opacity: 0 },
    { bottom: '20px', opacity: 1 }
  ], {
    fill: 'forwards',
    duration: 500
  });

  // Set the duration the popup will show
  const displayDuration = isSuccess ? 700 : 5000; // Show longer for errors

  // Remove the popup after displayDuration
  setTimeout(() => {
    feedbackPopup.animate([
      { opacity: 1 },
      { opacity: 0 }
    ], {
      fill: 'forwards',
      duration: 500
    }).onfinish = () => {
      feedbackPopup.remove();
    };
  }, displayDuration);
}
  


async function handleNameUpdate(event) {
  event.preventDefault();
  // Get the values from the form inputs
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;

  try {
    // Send the POST request to your server endpoint
    const response = await fetch('https://hoopshop.mammani.com/api/update-user-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ firstName, lastName })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Show success feedback and update the UI as needed
    showUserFeedback(data.message || 'Name updated successfully.', true);
    updateProfileContent('Account Details');
  } catch (error) {
    console.error('Failed to update user details:', error);
    // Show error feedback
    showUserFeedback(error, false);
  }
}



// Toggles the email change fields
function toggleEmailFields() {
  const emailChangeDiv = document.getElementById('email-change-fields');
  if (emailChangeDiv) {
    // If the fields are already there, remove them
    emailChangeDiv.remove();
  } else {
    // If the fields aren't there, add them
    const emailFields = `
      <div id="email-change-fields" style="margin-top:10px">
        <label for="email">Email:</label>
        <input type="email" id="old-email" placeholder="Old email" name="email">
        <input type="email" id="new-email" placeholder="New email">
        <input type="email" id="confirm-new-email" placeholder="Confirm new email">
        <button onclick="handleChangeEmail(event)">Submit</button>
      </div>
    `;
    document.getElementById('email-address-section').insertAdjacentHTML('beforeend', emailFields);
  }
}



// Toggles the password change fields
function togglePasswordFields() {
  const passwordChangeDiv = document.getElementById('password-change-fields');
  if (passwordChangeDiv) {
    // If the fields are already there, remove them
    passwordChangeDiv.remove();
  } else {
    // If the fields aren't there, add them
    const passwordFields = `
      <div id="password-change-fields" style="margin-top:10px">
        <label for="password">Password:</label>  
        <input type="password" id="old-password" placeholder="Old password" name="password">
        <input type="password" id="new-password" placeholder="New password">
        <input type="password" id="confirm-new-password" placeholder="Confirm new password">
        <button onclick="handleChangePassword()">Submit</button>
      </div>
    `;
    document.getElementById('password-section').insertAdjacentHTML('beforeend', passwordFields);
  }
}



// Function to handle email change submission
async function handleChangeEmail(event) {
  if (event) {
    event.preventDefault();
  }
  
  // Get the values from the input fields
  const oldEmail = document.getElementById('old-email').value;
  const newEmail = document.getElementById('new-email').value;
  const confirmNewEmail = document.getElementById('confirm-new-email').value;
  
  // Validate emails have an '@' symbol
  if (!newEmail.includes('@') || !confirmNewEmail.includes('@')) {
    showUserFeedback("Please include an '@' in the email addresses.", false);
    return;
  }

  // Ensure new emails match
  if (newEmail !== confirmNewEmail) {
    showUserFeedback("New email addresses do not match.", false);
    return;
  }

  // Make the request to the backend to update the email
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/update-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // To ensure cookies are sent
      body: JSON.stringify({ oldEmail, newEmail })
    });
    
    if (!response.ok && response.status === 409) {
      // If the email is already in use, inform the user with a specific message
      showUserFeedback('This email is already in use. Please choose another one.', false);
    } else if (!response.ok && response.status === 401) {
      // If the email is already in use, inform the user with a specific message
      showUserFeedback('Old email does not match', false);
    } else if (!response.ok) {
      // For all other errors, throw an error to be caught below
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
    // Use the showUserFeedback function to inform the user of success
    showUserFeedback(data.message || 'Email updated successfully.', true);
    }

    // Optionally, you could clear the input fields or close the email change div
    document.getElementById('email-change-fields').remove();
  } catch (error) {
    console.error('Failed to update email:', error);
    // Use the showUserFeedback function to inform the user of the error
    showUserFeedback(error.toString(), false);
  }
}



// Function to handle password change submission
async function handleChangePassword(event) {
  if (event) {
    event.preventDefault();
  }

  // Get the values from the input fields
  const oldPassword = document.getElementById('old-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmNewPassword = document.getElementById('confirm-new-password').value;

  // Check if the two new passwords match
  if (newPassword !== confirmNewPassword) {
    showUserFeedback("The new passwords do not match.", false);
    return;
  }

  // Make the request to the backend to check the old password and update to the new password
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // To ensure cookies are sent
      body: JSON.stringify({ oldPassword, newPassword })
    });

    if (response.status === 401) {
      // If the old password does not match, the backend will return a 401 error
      showUserFeedback("The old password is incorrect.", false);
      return;
    }
    
    if (response.status === 401) {
      // Specific message for incorrect old password
      showUserFeedback("The old password is incorrect. Please try again.", false);
    } else if (!response.ok) {
      // For other errors
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
    // Inform the user of success
    showUserFeedback(data.message || 'Password updated successfully.', true);
    }
    // Clear the input fields or close the password change div
    document.getElementById('password-change-fields').remove();
  } catch (error) {
    // Inform the user of the error
    console.error('Failed to update password:', error);
    showUserFeedback(error.toString(), false);
  }
}



// Attach event listeners that depend on dynamically loaded content
function attachDynamicEventListeners() {
  // Event listener for Change Email link
  const changeEmailLink = document.getElementById('change-email');
  if (changeEmailLink) {
    changeEmailLink.addEventListener('click', (event) => {
      event.preventDefault();
      toggleEmailFields();
    });
  }

  // Event listener for Change Password link
  const changePasswordLink = document.getElementById('change-password');
  if (changePasswordLink) {
    changePasswordLink.addEventListener('click', (event) => {
      event.preventDefault();
      togglePasswordFields();
    });
  }
}



// Function to add a new address
async function handleAddAddress(event) {
  event.preventDefault();
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const phoneNumber = document.getElementById('phonenumber').value;
  const zipcode = document.getElementById('zipcode').value;
  
  const address = { street, city, country, phoneNumber, zipcode };

  try {
    const response = await fetch('https://hoopshop.mammani.com/api/user-addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ address })
    });

    const data = await response.json(); // Make sure to parse the JSON response

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`); // Use the message from the response if available
    }

    showUserFeedback(data.message, true);
    // Refresh the addresses list
    await updateProfileContent('Your Addresses');
  } catch (error) {
    console.error('Failed to add address:', error);
    showUserFeedback(error.toString(), false);
  }
}


// Function to delete an address
async function handleDeleteAddress(addressId) {
  if (!addressId) {
    console.error('No address ID provided for deletion');
    return;
  }
  console.log('Deleting address with ID:', addressId); // For debugging
  try {
    const response = await fetch(`https://hoopshop.mammani.com/api/user-addresses/${addressId}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    showUserFeedback(data.message, true);

    // Ensure the address list is updated only after the server confirms deletion
    await updateProfileContent('Your Addresses');
  } catch (error) {
    // Handle specific 404 error after deletion
    if (error.message.includes('404')) {
      console.log('Address deleted, but encountered a 404 error when refreshing the list. This may be due to the address no longer existing.');
      await updateProfileContent('Your Addresses'); // Refresh the list to remove the deleted address
    } else {
      console.error('Failed to delete address:', error);
      showUserFeedback(error.toString(), false);
    }
  }
}




// Function to dynamically generate the addresses list with delete buttons
function generateAddressesList(addresses) {
  return addresses.map(address => `
    <div class="address-entry">
      <p>${address.street}, ${address.city}, ${address.country}</p>
      <button class="delete-button" data-address-id="${address.address_id}">Delete</button>
    </div>
  `).join('');
}



// Call updateProfileContent initially for the default view and attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners to sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const headerText = link.textContent.trim();
      if (headerText !== 'Log Out') {
        await updateProfileContent(headerText);
      } else {
        await handleLogout();
      }
    });
  });

  
  // Initially load the Account Details section
  updateProfileContent('Account Details');
});


// SEARCHING
// Debounce function to limit the rate at which the function is fired
function debounce(func, delay) {
  let debounceTimer;
  return function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// Function to show the search popup
function showSearchPopup(results) {
  const popup = document.querySelector('.search-popup');
  popup.innerHTML = ''; // Clear previous results
  popup.style.display = 'block'; // Show the popup

// Inside showSearchPopup function, for each product:
results.forEach(result => {
  const resultElement = document.createElement('div');
  resultElement.classList.add('search-result-item');

  const linkElement = document.createElement('a');
  linkElement.href = `./product-page.html?productId=${result.id}`; // Point the link to the product detail page with the product ID
  linkElement.classList.add('search-result-link');

  const imageElement = document.createElement('img');
  imageElement.src = result.imageUrls[0];
  imageElement.classList.add('product-image');

  const nameElement = document.createElement('span');
  nameElement.textContent = result.name;
  nameElement.classList.add('product-name');

  const priceElement = document.createElement('span');
  priceElement.textContent = result.price;
  priceElement.classList.add('product-price');

  // Append the image and text to the link element
  linkElement.appendChild(imageElement);
  linkElement.appendChild(nameElement);
  linkElement.appendChild(priceElement);

  // Append the link element to the result element
  resultElement.appendChild(linkElement);

  // Append the result element to the popup
  popup.appendChild(resultElement);
});


}

// Function to hide the search popup
function hideSearchPopup() {
  document.querySelector('.search-popup').style.display = 'none';
}

// Enhanced search function
function handleSearch() {
  const searchText = document.querySelector('.search-input').value.toLowerCase();
  
  // Filter products based on the search text
  const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(searchText)
  );

  // If there's search text, show the popup with results, else hide it
  if (searchText) {
      showSearchPopup(searchResults);
  } else {
      hideSearchPopup();
  }
}

// Debounced event listener still applies here
document.querySelector('.search-input').addEventListener('keyup', debounce(handleSearch, 300));

// You might also want to hide the popup when the user clicks outside of it
document.addEventListener('click', function(event) {
  const popup = document.querySelector('.search-popup');
  if (!popup.contains(event.target) && !document.querySelector('.search-input').contains(event.target)) {
      hideSearchPopup();
  }
});

// Attach an event listener to the form submission
document.querySelector('.header-search-bar form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const searchText = document.querySelector('.search-input').value;
  window.location.href = `./all-products-page.html?query=${encodeURIComponent(searchText)}`; // Redirect to the all products page with search query
});



// CART

// Function to check if user is logged in
async function isUserLoggedIn() {
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/check-session', {
      method: 'GET',
      credentials: 'include' // Required for cookies to be sent
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.loggedIn;
  } catch (error) {
    console.error('Could not check login status:', error);
    return false;
  }
}


// Function to toggle the mini-cart visibility
function toggleMiniCart() {
  const miniCartContainer = document.getElementById('mini-cart-container');
  miniCartContainer.style.display = miniCartContainer.style.display === 'block' ? 'none' : 'block';
}

// Function to render the mini cart
async function renderMiniCart() {
  const cartItemsContainer = document.getElementById('mini-cart-items');
  cartItemsContainer.innerHTML = ''; // Clear existing items
  
  // Check if user is logged in
  const loggedIn = await isUserLoggedIn();
  let cartItems = [];

  if (loggedIn) {
    // Fetch the cart data from backend
    cartItems = await fetchCartFromBackend();
  } else {
    // Use the cart data from local storage
    cartItems = JSON.parse(localStorage.getItem('temporaryCart')) || [];
  }

  let subtotal = 0; // To accumulate the total price
  
  if (cartItems.length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'No products in cart.';
    emptyCartMessage.style.color = 'grey'; // Set the text to grey
    emptyCartMessage.style.textAlign = 'center'; // Center the text
    emptyCartMessage.style.marginTop = '20px'; // Add some margin at the top
    emptyCartMessage.style.marginBottom = '20px'; // Add some margin at the top
    cartItemsContainer.appendChild(emptyCartMessage);
  } else {
    
    cartItems.forEach(item => {

      // Ensure productId is an integer
      const productId = parseInt(item.productId, 10);
      const product = products.find(p => p.id === productId);

      if (!product) {
        console.error('Product not found in cart:', productId);
        // Handle the error appropriately
        return;
      }

      // Calculate the total price for the item
      const totalPrice = (parseFloat(product.price.replace('CA$', '')) * item.quantity).toFixed(2);

      // Create mini cart item element
      const miniCartItem = document.createElement('div');
      miniCartItem.classList.add('mini-cart-item');

      // Assume product name and image URL are available on the product object
      miniCartItem.innerHTML = `
        <div class='cart-item'>
        <a href="./product-page.html?productId=${item.productId}" class="mini-cart-link">
          <img src="${product.imageUrls[0]}" alt="${product.name}" class="mini-cart-image">
          <div class="mini-cart-details">
              <p class="mini-cart-product-name">${product.name} - ${item.size ? `Size: ${item.size}` : ''}</p>
              <p class="mini-cart-quantity">Quantity: ${item.quantity}</p>
              <p class="mini-cart-price">CA$${totalPrice}</p>
            </a>
            <button onclick="removeFromCart(${item.productId})" class="mini-cart-remove">Remove</button>
          </div>
        </div>
      `;

      // Update the Remove button's onclick attribute to include size
      miniCartItem.querySelector('.mini-cart-remove').onclick = () => removeFromCart(item.productId, item.size);
      cartItemsContainer.appendChild(miniCartItem);



      // Calculate the total price for the item and add to subtotal
      subtotal += parseFloat(product.price.replace('CA$', '')) * item.quantity;
      

    });
  }

  // Calculate taxes and delivery fee
  const GST_RATE = 0.05;
  const PST_RATE = 0.07;
  let gst = subtotal * GST_RATE;
  let pst = subtotal * PST_RATE;
  let tax = gst + pst;
  let deliveryFee = subtotal > 100 ? 0 : 12;

  if (cartItems.length === 0) {
    deliveryFee = 0;
  }

  // Calculate percentage towards free delivery
  const progressPercentage = Math.min(100, (subtotal / 100) * 100); // Assuming $100 is the target for free delivery
  const progressBarFill = document.getElementById('progress-bar-fill');
  progressBarFill.style.width = `${progressPercentage}%`;

  // Update the progress text based on subtotal
  const progressText = document.getElementById('progress-text');
  if(subtotal >= 100) {
    progressText.textContent = "You get FREE Delivery!";
  } else {
    let remaining = (100 - subtotal).toFixed(2);
    progressText.textContent = `You are $${remaining} away from getting Free Delivery Off.`;
  }

  // Add Tax, GST, PST, and Delivery Fee details
  // Update the tax and delivery text based on subtotal
  const cartTaxTotal = document.getElementById('tax-total');
  const cartTaxGST = document.getElementById('tax-gst');
  const cartTaxPST = document.getElementById('tax-pst');
  const cartDelivery = document.getElementById('cart-delivery-fee');

  cartTaxTotal.textContent = `Tax: CA$${tax.toFixed(2)}`;
  cartTaxGST.textContent = `GST (5%): CA$${gst.toFixed(2)}`;
  cartTaxPST.textContent = `PST (7%): CA$${pst.toFixed(2)}`;
  cartDelivery.textContent = `Delivery Fee: CA$${deliveryFee.toFixed(2)}`;
  

  // Update the subtotal in the summary
  document.getElementById('cart-subtotal').textContent = (subtotal + tax + deliveryFee).toFixed(2);
    

  // Add event listener to go to cart button
  document.getElementById('fullcart-button').addEventListener('click', function() {
    window.location.href = './mycart.html';
  });
  
}

// Function to fetch cart items from the backend
async function fetchCartFromBackend() {
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/cart', {
      method: 'GET',
      credentials: 'include' // Required for cookies to be sent
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.cart || []; // Make sure to return an array even if data.cart is not defined
  } catch (error) {
    console.error('Could not fetch cart from backend:', error);
    return []; // Return an empty array in case of an error
  }
}



// Remove item from cart
// Function to remove an item from the cart
async function removeFromCart(productId, size) {

const loggedIn = await isUserLoggedIn();
if (loggedIn) {
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/cart/delete-item', {
      method: 'POST',
      credentials: 'include', // Required for cookies to be sent
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, size }) // userId is removed from the body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Item removed successfully');
    await updateCartCounter();
    renderMiniCart(); // No need to await fetchCartFromBackend here
  } catch (error) {
    console.error('Could not remove item from cart:', error);
  }
} else {
  // Remove item from local storage cart
  let cart = JSON.parse(localStorage.getItem('temporaryCart')) || [];
  cart = cart.filter(item => !(item.productId === productId && item.size === size));
  localStorage.setItem('temporaryCart', JSON.stringify(cart));
  console.log('Item removed from local cart:', productId);
  await updateCartCounter();
  renderMiniCart();
}
}


// Event listener for the cart icon
document.getElementById('cart-icon').addEventListener('click', function(event) {
  event.preventDefault();

  // Toggle the mini-cart-container visibility
  const miniCartContainer = document.getElementById('mini-cart-container');
  if (miniCartContainer.style.display === 'block') {
    miniCartContainer.style.display = 'none'; // Hide the cart if it's visible
  } else {
    renderMiniCart();
    miniCartContainer.style.display = 'block'; // Show the cart if it's hidden
  }
});


function showAddedToCartPopup() {
  // Create the popup element
  const popup = document.createElement('div');
  popup.id = 'added-to-cart-popup';
  popup.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="color: green;">✔</span>
      <span>Added to Bag</span>
    </div>
  `;

  // Style the popup
  popup.style.position = 'fixed';
  popup.style.top = '25%';
  popup.style.right = '20px';
  popup.style.backgroundColor = 'white';
  popup.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
  popup.style.padding = '10px';
  popup.style.borderRadius = '5px';
  popup.style.zIndex = '1000';

  // Append the popup to the body
  document.body.appendChild(popup);

  // Remove the popup after 3 seconds
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

// Function to update cart counter
async function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  
  // Initially set total items to 0
  let totalItems = 0;

  if (await isUserLoggedIn()) {
    // Fetch the cart data from backend and update the counter
    const cartItems = await fetchCartFromBackend();
    totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  } else {
    // Calculate total items from local storage
    let cart = JSON.parse(localStorage.getItem('temporaryCart')) || [];
    totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  cartCounter.textContent = totalItems.toString(); // Update the counter display
}

// Call this function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async function() {

  // Initially hide the mini-cart
  document.getElementById('mini-cart-container').style.display = 'none';
  
  await updateCartCounter();
});


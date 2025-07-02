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


// 0 - Log In Mode
// 1 - Create An Account Mode
let loginMode = true;

document.addEventListener('DOMContentLoaded', async () => {
  setInitialMode();
  
  const loggedIn = await isUserLoggedIn();
  if (loggedIn) {
    //cleanUpBackendCart();
    window.location.href = './profile-page.html';
    return; // Stop further execution if user is logged in
  }
  
  setupFormSubmission();
  setupModeToggle();
});

function setInitialMode() {
  updateModeUI(loginMode);
}


function setupFormSubmission() {
  const signInForm = document.getElementById('signin-form');

  signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(signInForm);
    console.log('Form Data:', formData);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    const apiEndpoint = loginMode ? '/api/login' : '/api/create-account';
    let requestBody = {};

    // Populate requestBody with form data
    formData.forEach((value, key) => {
      // Convert dashed keys to underscored keys for the server
      const formattedKey = key.replace(/-/g, '_');
      requestBody[formattedKey] = value;
    });


    // In login mode, remove unnecessary fields from the request body
    if (loginMode) {
      delete requestBody['first-name'];
      delete requestBody['last-name'];
    }

    console.log('Request Body:', requestBody);

    try {
      const response = await fetch(`https://hoopshop.mammani.com${apiEndpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // Response is JSON
          const result = await response.json();
          showUserFeedback(result, true);
          if (loginMode) {
            await transferCartToBackend(); // Call this after successful login
            // Redirect to the profile page after successful transfer
            window.location.href = './profile-page.html';
          }
        } else {
          // Response is text
          const textResult = await response.text();
          showUserFeedback(textResult, true);
        }
      } else {
        // Handle non-OK responses
        try {
          const errorResult = await response.json();
          showUserFeedback(errorResult, false);
        } catch {
          // If the response is not JSON, just show a generic message
          showUserFeedback("An error occurred, please try again.", false);
        }
      }
      
    } catch (error) {
      console.error('An error occurred:', error);
      showUserFeedback('An error occurred, please try again.', false);
    }
  });
}

function setupModeToggle() {
  document.querySelector('.signin-option').addEventListener('click', function(event) {
    if (event.target.id === 'signin-signup') {
      event.preventDefault();
      loginMode = !loginMode;
      updateModeUI(loginMode);
    }
  });
}

function updateModeUI(isLoginMode) {
  let pageModeHeader = document.getElementById('form-title');
  let infoPanelImage = document.getElementById('info-panel-image');
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let signinBox = document.querySelector('.signin-box');
  let infoPanel = document.querySelector('.info-panel');

  if (isLoginMode) {
      pageModeHeader.textContent = 'Log In';
      document.getElementById('sign-in-up-button').textContent = 'Log In';
      document.getElementById('signin-signup-prompt').innerHTML = "Don't have an account? <a href='' id='signin-signup'>Sign Up here</a>";
      infoPanelImage.style.backgroundImage = 'url("../assets/images/sign-in-page/Background-2.webp")';
      signinBox.style.height = '400px';
      infoPanel.style.height = '400px';
      infoPanelImage.style.backgroundSize = 'cover';
      infoPanel.querySelector('h2').style.marginTop = '320px';

      // Remove 'required' attribute when in log in mode
      firstNameInput.removeAttribute('required');
      lastNameInput.removeAttribute('required');
      
      // Hide the inputs
      firstNameInput.style.display = 'none';
      lastNameInput.style.display = 'none';
  } else {
      pageModeHeader.textContent = 'Create account';
      document.getElementById('sign-in-up-button').textContent = 'Create Account';
      document.getElementById('signin-signup-prompt').innerHTML = "Already have an account? <a href='' id='signin-signup'>Sign In here</a>";
      infoPanelImage.style.backgroundImage = 'url("../assets/images/sign-in-page/Background-1.webp")';
      signinBox.style.height = '500px';
      infoPanel.style.height = '500px';
      pageModeHeader.style.marginTop = "35px";
      infoPanelImage.style.backgroundSize = '100% 580px';
      infoPanel.querySelector('h2').style.marginTop = '400px';

      // Set 'required' attribute when in account creation mode
      firstNameInput.setAttribute('required', '');
      lastNameInput.setAttribute('required', '');

      // Show the inputs
      firstNameInput.style.display = 'block';
      lastNameInput.style.display = 'block';
  }
}


async function showUserFeedback(responseMessage, isSuccess) {
  let message = responseMessage;

  // Ensure that the message is a string
  if (typeof responseMessage === 'object' && responseMessage.message) {
    message = responseMessage.message;
  } else if (typeof responseMessage === 'string') {
    try {
      const parsed = JSON.parse(responseMessage);
      if (parsed.message) {
        message = parsed.message;
      }
    } catch (e) {
      console.error('Could not parse the JSON message', e);
    }
  } else if (typeof responseMessage === 'object' && responseMessage.message) {
    // If responseMessage is already an object, just use the message property
    message = responseMessage.message;
  }

  // Create the popup element
  const popup = document.createElement('div');
  popup.id = 'user-feedback-popup';
  popup.style.position = 'fixed';
  popup.style.left = '50%';
  popup.style.bottom = '20px';
  popup.style.transform = 'translateX(-50%)';
  popup.style.backgroundColor = isSuccess ? 'green' : 'red';
  popup.style.color = 'white';
  popup.style.padding = '10px';
  popup.style.borderRadius = '5px';
  popup.style.zIndex = '1000';
  popup.style.transition = 'all 0.3s ease';
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span>${isSuccess ? '✔' : '✖'}</span>
      <span>${message}</span>
    </div>
  `;

  // Append the popup to the body
  document.body.appendChild(popup);

  // Make the popup visible
  setTimeout(() => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  }, 100);

  // Set the duration the popup will show based on success or failure
  const displayDuration = isSuccess ? 700 : 3000; // 1.5 seconds for success

  // After showing the popup for a while, hide it and then redirect
  setTimeout(async() => {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';

    // After the popup fades out, remove it and redirect
    setTimeout(async() => {
      popup.remove();
      // Only redirect if it was a success
      if (isSuccess && responseMessage.userId) { 
        // Redirect to the profile page after successful login
        window.location.href = './profile-page.html';
      }
    }, 300);
  }, displayDuration);
}



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
    return data.loggedIn; // Returns true or false based on login status
  } catch (error) {
    console.error('Could not check login status:', error);
    return false;
  }
}




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


async function addToCartBackend(product, quantity, size) {
  
  const numericQuantity = Number(quantity);
  
  try {
    const response = await fetch('https://hoopshop.mammani.com/api/add-to-cart', {
      method: 'POST',
      credentials: 'include', // Required for cookies to be sent
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: product.id, quantity: numericQuantity, size })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Item successfully added to server cart: ${product.name}, Quantity: ${numericQuantity}, Size: ${size}`);
    
    // Call these functions after the item is added to the backend cart
    showAddedToCartPopup(); // Show the popup
    await updateCartCounter(); // Update the cart counter
    renderMiniCart(); // Update the mini-cart

  } catch (error) {
    console.error('Could not add item to server cart:', error);
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
      console.log('Cart Item:', item); // Add this line for debugging

      // Convert quantity to a number before any calculations
      const numericQuantity = Number(item.quantity);

      if (!Number.isFinite(numericQuantity)) {
        console.error('Quantity is not a valid number for item:', item);
        return; // Skip this item or handle the error as appropriate
      }

      // Ensure productId is an integer
      const productId = parseInt(item.productId, 10);
      const product = products.find(p => p.id === productId);

      if (isNaN(productId)) {
        console.error('Product ID is NaN for item:', item); // Add error logging here
        return;
      }
      if (!product) {
        console.error('Product not found in cart:', productId);
        // Handle the error appropriately
        return;
      }

      // Calculate the total price for the item
      const totalPrice = (parseFloat(product.price.replace('CA$', '')) * numericQuantity).toFixed(2);

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


async function transferCartToBackend() {
  const localCart = JSON.parse(localStorage.getItem('temporaryCart')) || [];
  console.log('Local cart before transfer:', localCart);
  
  if (localCart.length === 0) {
    console.log("No Items In The Local Cart To Transfer");
  } else {
    console.log("Transferring Items From Local Cart To Backend");

    for (const item of localCart) {

      // Ensure productId is an integer
      const productId = parseInt(item.productId, 10);
      const product = products.find(p => p.id === productId);
  
      if (!product) {
        console.error('Product not found in cart:', productId);
        continue; // Use continue instead of return to proceed to the next iteration
      }

      await addToCartBackend(product, item.quantity, item.size);
      
    }
  }
  
  clearLocalStorageCart();
}



async function cleanUpBackendCart() {
  // Fetch the current cart items from the backend
  let cartItems = await fetchCartFromBackend();

  // Filter out items that need to be cleaned up: invalid quantities, missing productIds, or empty objects
  let itemsToBeRemoved = cartItems.filter(item => {
    return !item || 
           !item.hasOwnProperty('productId') || 
           isNaN(item.productId) || 
           !item.hasOwnProperty('quantity') || 
           item.quantity <= 0;
  });

  // Iterate over items to be removed and delete them
  for (const item of itemsToBeRemoved) {
    try {
      await removeFromCart(item.productId, item.size);
      console.log(`Removed invalid item with productId: ${item.productId}`);
    } catch (error) {
      console.error(`Could not remove item with productId: ${item.productId} from backend cart`, error);
    }
  }

  // If there were items removed, refresh the cart display
  if (itemsToBeRemoved.length > 0) {
    await updateCartCounter();
    await renderMiniCart();
  } else {
    console.log("No invalid items in the cart, no action taken.");
  }
}




// Function to clear the cart in local storage after successful transfer
function clearLocalStorageCart() {
  localStorage.removeItem('temporaryCart');
}
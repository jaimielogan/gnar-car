
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mountain').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('mountain').insert({id: 1, name: 'Arapahoe Basin', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=cac2a4ec-a448-4b5d-a627-efb9afa59ad4', lat: 39.6423, long: 105.8717, description: 'Since 1946, Arapahoe Basin has been serving up a fantastic ride for skiers and riders from Colorado and all over the world. We\'re often the first in Colorado to open - if not the nation - and the last in Colorado to close. Arapahoe Basin receives over 350 inches of snowfall annually.', elevation: 13050, runs: 109, image_url: 'http://powderskiingcolorado.com/wp-content/uploads/2011/02/arapahoe-basin.jpg', website: 'http://arapahoebasin.com/Abasin/Default.aspx'}),

        knex('mountain').insert({id: 2, name: 'Aspen Snowmass', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=b76b5e48-6298-4721-9fe9-8e37285200e3', lat: 39.2085, long: 106.9498, description: 'Snowmass is the largest of the four Aspen/Snowmass mountains, comprising 3,128 acres (1,266 ha). The mountain is most notable for its wide cruiser runs, family-friendly atmosphere, and extensive ski-in/ski-out lodging.', elevation: 12510, runs: 94, image_url: 'http://img1.onthesnow.com/image/gg/14/14364.jpg', website: 'https://www.aspensnowmass.com/'}),

        knex('mountain').insert({id: 3, name: 'Copper Mountain', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=dbe51ad3-f456-4d6c-b78e-e50fa9c36f9c', lat: 39.5022, long: 106.1511, description: 'For generations, people have valued a down-to-earth ski experience that puts friends, family and relaxed mountain atmosphere above all else.', elevation: 12313, runs: 140, image_url: 'http://www.friscoinnongalena.com/wp-content/uploads/2014/05/copper-mountain-aerial.jpg', website: 'http://www.coppercolorado.com/winter'}),

        knex('mountain').insert({id: 4, name: 'Crested Butte', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=022bddd5-15f6-4dc8-9258-21286bd7081a', lat: 38.8984, long: 106.9671, description: 'Winter is here, and the skiing and snowboarding is great! We  have lots to offer visitors, from incredible skiing and riding to sleigh ride dinners, and snowmobile adventures to zipline tours. With that being said, the stories in Crested Butte are endless. ', elevation: 12170, runs: 121, image_url: 'http://snowboarding.transworld.net/files/2011/09/crested-butte-mountain-resort.jpg', website: 'http://www.skicb.com/'}),

        knex('mountain').insert({id: 5, name: 'Eldora', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=d07f4b95-8c37-43d5-b93f-d873d19a4f69', lat: 39.9372, long: 105.5827, description: 'Eldora is the closest ski area to the Denver metro area. By a large margin, it is the closest to Boulder, and is one of the few Colorado ski resorts on the east side of the continental divide.', elevation: 10800, runs: 53, image_url: 'http://www.firsttracksonline.com/wp-content/uploads/2014/12/eldora.jpg', website: 'https://www.eldora.com/'}),

        knex('mountain').insert({id: 6, name: 'Loveland', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=82dacb6f-93ff-4aca-b8dd-21667b7a2d3f', lat: 39.6800, long: 105.8979, description: 'Near to the hearts and homes of generations of Colorado skiers and riders, Loveland is Colorado’s true winter wonderland. Just 53 miles west of Denver, Loveland boasts 1,800 acres of remarkable terrain, FREE snowcat skiing along the Continental Divide, an innovative lesson program and more snow than any Front Range or Summit County resort. Loveland is home for those that simply want to ski or ride. Welcome home.', elevation: 13010, runs: 93, image_url: 'http://www.skicoupons.com/winter/wp-content/uploads/2013/11/loveland-ski-area-trails.jpg', website: 'http://skiloveland.com/'}),

        knex('mountain').insert({id: 7, name: 'Monarch', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=93d94644-b286-4a3c-b6bf-9d8356966973', lat: 38.5127, long: 106.3315, description: 'Monarch Ski and Snowboard Area is located on U.S. Highway 50. It is twenty miles (32 km) west of Salida, Colorado, on Monarch Pass and has 54 trails, two terrain parks, and an extreme terrain area called Mirkwood.', elevation: 11960, runs: 63, image_url: 'http://monarchskiguide.com/wp-content/uploads/2010/07/monarch-resort-1.jpg', website: 'http://www.skimonarch.com/'}),

        knex('mountain').insert({id: 9, name: 'Silverton', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=df203d29-9d68-41f5-b87a-d98c45efe8bb', lat: 37.8846, long: 107.6659, description: 'Imagine a place where the average total snowfall of over 400 inches exceeds the amount of daily visitors. Advanced and expert only riding, no groomers, no clearcut runs and a real mountain experience with plenty of adventure on tap. All thrills no frills.', elevation: 13487, runs: null, image_url: 'http://snowbrains.com/wp-content/uploads/2013/06/silverton-ted.jpg', website: 'http://silvertonmountain.com/'}),

        knex('mountain').insert({id: 10, name: 'Steamboat', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=ed1b3e74-d0b7-43e0-83b2-6ce55397834b', lat: 37.9375, long: 107.8123, description: 'With 26% more trails and 10% more lifts than the average Colorado ski resort, you\'ll spend less time in liftlines, and more time on our slopes. Steamboat\'s wide variety of terrain offers the perfect experience for everyone. From our expert chutes to our kids-only terrain, you\'ll never be left out.', elevation: 10568, runs: 165, image_url: 'http://my.steamboat.com/wp-content/uploads/2015/10/A67-676x450.jpg', website: 'https://www.steamboat.com/'}),

        knex('mountain').insert({id: 11, name: 'Telluride', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=b1e90e4f-fb8e-4076-a15c-f80f14ff03e5', lat: 40.4572, long: 106.8045, description: 'Telluride Ski Resort has over 2,000 skiable acres and spans between the historic town of Telluride, Colorado and the modern alpine community of Mountain Village, Colorado. While Telluride is well known for its advanced terrain the resort boasts over 50% beginner and intermediate runs. The top of resort features primarily expert and advanced terrain. The middle of the mountain offers plenty of cruisers and corduroy for intermediates and the lower/southwest side offer gentle runs where beginners can comfortably learn how to ski or grow their skills and confidence.', elevation: 13150, runs: 127, image_url: 'http://powderskiingcolorado.com/wp-content/uploads/2011/03/telluride.jpg', website: 'http://www.tellurideskiresort.com/'}),

        knex('mountain').insert({id: 12, name: 'Winter Park', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=6336a016-67b1-4ee1-84ba-e86975485e86', lat: 39.8868, long: 105.7625, description: 'With a 75-year history, Winter Park Resort is Colorado\'s longest continually operated ski resort. Over the years we\'ve been known to be "Extremely Colorado," "Authentic Colorado," and "Colorado\'s Favorite." Regardless of what you know us as, rest assured we\'re More Than You Imagine!', elevation: 12060, runs: 143, image_url: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/180058/Winter-Park-Ski-Area-147469.jpg', website: 'https://www.winterparkresort.com/'}),

        knex('mountain').insert({id: 13, name: 'Breckenridge', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=ee1b280c-f69d-45a2-8373-6e19cd428117', lat: 39.4817, long: 106.0384, description: 'With five huge peaks spanning 2,908 acres, Breckenridge skiing has something for all abilities and interests. Every beginner and intermediate trail is groomed nightly so you can enjoy endless turns throughout your day. Or, ride North America’s highest chairlift, the Imperial Express, up to the high alpine bowls for unforgettable views and steeps. If you\’re looking for terrain parks, Breckenridge has four—one for every skill level.', elevation: 12998, runs: 155, image_url: 'https://activerain-store.s3.amazonaws.com/image_store/uploads/6/7/9/3/6/ar12895037263976.jpg', website: 'http://www.breckenridge.com/'}),

      ]);
    });
};

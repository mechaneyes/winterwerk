# WinterWerk

WinterWerk is primarily a personal headless WordPress blog built out via Next.js and Vercel. Several links to that documentation is immediately below.

WinterWerk also serves as a sandbox for working through some JS+Visuals ideas. Currently my experiment with horizontal scrolling is up, as is an experiment with a masonry gallery layout.

![Homepage Hero](./screenshot.jpg "Homepage Hero")


## Previewing Post Drafts Locally

```
http://localhost:3000/api/preview?secret=preview&slug=slugname
```


<br>


# Next.js v WebFinger Protocol

I pulled direction from Rob Earlam's, [How to implement the WebFinger Protocol on a NextJS site](https://robearlam.com/blog/webfinger-on-nextjs). He breaks down the process quite nicely there.

Now i can hand someone the federated address `@mechaneyes@winterwerk.one` or `@ray@winterwerk.one` and it resolves to `@mechaneyes@hypermute.com`.

Now that I know this works, I'm gonna setup the primary address at mechaneyes.com.

My longtime email addy has been, ray@mechaneyes.com, so it's a natural extension to go to `@ray@mechaneyes.com`.

Just a bit more work to be done there.


<br>

# Next.js v WordPress

## Using Headless WordPress with Next.js and Vercel

Headless architecture decouples your frontend and backend into separate, independently scalable pieces of infrastructure. Headless WordPress enables you to keep your existing content workflows in place while evolving your frontend for increased performance.

https://vercel.com/guides/wordpress-with-vercel


## An Incremental Static Regeneration Blog Example Using Next.js and WordPress

This example showcases Next.js's [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) feature using [WordPress](https://wordpress.org) as the data source.

<br>


# Mechaneyes Experiments

## Masonry Gallery Layout

### [/pages/republic/masonry.tsx](/pages/republic/masonry.tsx)

I've built out this little gallery in order to quickly expose images that I can use for raw material when working with text-to-image generative models. 

Midjourney can work with existing images placed into one's prompts. Thing is they need to live online somewhere and it's that image's URL that should be placed in the prompt.

So I've quickly hacked together this home for some images and put next to their exploded out, lightbox display, a little 'copy' icon which copies the image's URL to the clipboard when clicked.

Building this out had me working more closely than ever with GitHub Copilot. This interaction was largely fantastic. It did however break down when it came to setting up routing for the Next.js app. The only reason I wanted this up and running was to setup links to the various pages of the gallery. This aspect is still TBD.

### Using S3 for storing the images
#### This from GitHub Copilot:
To fetch images from an AWS S3 bucket, you would use the AWS SDK for JavaScript in Node.js. Here's how you can modify your getStaticProps function to fetch the list of images from an S3 bucket:

```js
import AWS from 'aws-sdk';

export async function getStaticProps() {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: 'dr/' // if your images are in a 'dr' folder in the bucket
  };

  const data = await s3.listObjectsV2(params).promise();

  const filteredImages = data.Contents.filter((item) =>
    item.Key.includes("1024")
  ).map(item => item.Key);

  return {
    props: {
      images: filteredImages,
    },
  };
}
```

In this code, we're creating an instance of the AWS.S3 class with your AWS credentials and region. Then we're calling the listObjectsV2 method to get a list of all objects in the specified bucket. We're filtering this list to include only the images that have "1024" in their filename.

Please note that you need to replace process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY, process.env.AWS_REGION and process.env.AWS_BUCKET_NAME with your actual AWS credentials, region and bucket name.

For the next steps, you might want to:

Install the AWS SDK with `npm install aws-sdk`.
Set up your AWS credentials and bucket name in your environment variables.
Modify your getStaticProps function to fetch the list of images from an S3 bucket.
Test your page to see if the images are loaded correctly.



## Horizontal Scrolling

### [/pages/republic/horizontal.tsx](/pages/republic/horizontal.tsx)

### Scroll horizontally with mouse wheel: Vanilla JavaScript
https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/


<br>

# Soundtrack for Developoment

### [Test Pressing, Apiento, 13.05.17](https://www.nts.live/shows/test-pressing/episodes/test-pressing-13th-may-2017)

COSMIC &middot; DISCOLEFTFIELD &middot; DISCOBALEARIC &middot; HOUSEDEEP &middot; HOUSE





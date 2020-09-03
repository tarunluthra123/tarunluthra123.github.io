### My Resume
I have used several different technologies to build this responsive and interactive resume.
<br>
Technologies used : 
<ul>
<li>React</li>
<li>Bootstrap</li>
<li>Semantic UI</li>
<li>Chart.js</li>
</ul>

You can view this resume [here](https://tarunluthra123.github.io/).

Only a small portion of the data is hardcoded into JSX. Rather most of it is obtained from JSON objects stored in /src/assets/data.
<br>
This allows easier and smoother updates for the future.

### Setting up the project
If you wish to build a similar resume for yourself, follow these instructions.
<ol>
<li>
Clone this repository

```
git clone https://github.com/tarunluthra123/tarunluthra123.github.io.git
```
Or fork this repository into your own account using the fork button on the top right and clone it from your own forked repository.
</li>

<li>
Update the data in .json files in src/assets/data folder according to yourself. Stick to the established format of each .json object or you might face some errors.
</li>
<li>
Update the images in assets folder as well. Some icons such as those of Github, Gmail etc. may be reusable. However most other images will have to be replaced.
</li>
<li>
Update the import statements in the project files according to the updates made in 2. and 3. as well.
</li>
<li>
Once set up, install the dependencies from package.json.

```
npm install
```
</li>
<li>
Run your react app.

```
npm start
```
Your resume should be up and running now if you didn't make an errors while following the above steps.
</li>
</ol>

If you do end up using this project for your resume, I only ask you to star &#127775; this project in return.

### Deploying (Optional)
After making the according changes, you can deploy your app to Github Pages as well just as I have. Simply change the "homepage" attribute in package.json to your own website URL and run this command.

```
npm run deploy
```
That's it. Your app should be deployed.
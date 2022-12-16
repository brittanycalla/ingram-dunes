# Ingram Dunes Website


This was a custom website that I built for Ingram Dunes Natural Area in North Myrtle Beach.


![A screen recording of ingramdunes.com](https://drive.google.com/uc?export=view&id=1ME1K5ykLTz3OCgMTraHqQnXFF8dmhGZK) 

## How It's Made:

**Tech used:** HTML5, Tailwind CSS, JavaScript

I was actively involved in the purchase and preservation of Ingram Dunes from 2017 to 2019. The 7.4-acre site, home to the highest relic dune in South Carolina, is tucked away in the historic Crescent Beach neighborhood right in the heart of the city. The goal of this website is to give an overview of the preserve and it's main features, and help visitors navigate to the preserve.

## Optimizations

This is a pretty simple website. I'd like to add an interactive map to the [Visit](http://ingramdunes.com/visit.html) page. I plan on capturing the GPS trail data and creating a map using GeoJSON and OpenStreetMap, inspired by [this](https://github.com/mapsandapps/trail-maps) repository.

## Lessons Learned:

I use the [iNaturalist Widget](https://www.inaturalist.org/observations/widget) on the homepage, which injects code into the DOM, but I did not like the styling so I made some changes to the rendered classes in my stylesheet. The main change was converting the table look into responsive cards.


| Original | After Style Adjustments |
| ----------- | ----------- |
| <img src="https://drive.google.com/uc?export=view&id=1zP5MZE9ynPK5yivRlFuf0XfiKZh6HgGM" height="450"> | <img src="https://drive.google.com/uc?export=view&id=1K1QP5doz1FVJ07mGSRBjAxG3KPmuvDVs" height="450"> |


To gather all [iNaturalist observations from Ingram Dunes Natural Area](https://www.inaturalist.org/places/ingram-dunes#observationstab) specifically, I needed to create a place on iNaturalist, which required a GeoJSON file. I was able to create one using [geojson.io](https://geojson.io/).

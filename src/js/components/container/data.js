function Show(params) {
	this.date = params.date;
	this.city = params.city;
	this.venue = params.venue;
	this.tickets = params.tickets;
	this.past = isInThePast(this.date)
	this.display = isWithinSixtyDays(this.date)
}

function isInThePast(date) {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	return date < today;
}

function isWithinSixtyDays(date) {

	const sixtyDaysInMs = 60 * 24 * 60 * 60 * 1000;
	const timestampSixtyDaysAgo = new Date().getTime() - sixtyDaysInMs;

	return timestampSixtyDaysAgo < date
}

const showsData = [
	{
		date: new Date('2023-08-19T20:00:00.000000'),
		city: 'Helper, UT',
		venue: 'Helper Arts Festival',
		tickets: ''
	},

	{
		date: new Date('2023-08-31T20:00:00.000000'),
		city: 'Salt Lake City, UT',
		venue: 'Kilby Court',
		tickets: 'https://www.24tix.com/event/1275500663/michael-barrow-+-rally'
	},

	{
		date: new Date('2023-09-15T20:00:00.000000'),
		city: 'Provo, UT',
		venue: 'Velour Live Music Gallery',
		tickets: ''
	},

	{
		date: new Date('2023-09-23T17:00:00.000000'),
		city: 'Tooele, UT',
		venue: 'Deseret Peak Complex - Lantern Festival',
		tickets: 'https://www.nightlightsevent.com/events/deseret-peak-complex-fall-1'
	},
];

export const shows = showsData.map( show => new Show(show));


		// {
		// 	date:
		// 	city:
		// 	venue:
		// 	tickets:
		// }

/* this is almost all of our 2019 dates:

	{
		date: "March 16",
		city: 'Camas, WA',
		venue: 'Union High School',
		tickets: ''
	},
	{
		date: "March 30",
		city: "Provo, UT",
		venue: "Velour Live Music Gallery",
		tickets: "https://www.24tix.com/event/1350167901/motion-coaster"
	},
	{
		date: "April 5",
		city: 'Logan, UT',
		venue: "Why Sound",
		tickets: ''
	},
	{
		date: 'April 13',
		city: 'Las Vegas, NV',
		venue: 'SoFar Secret Show',
		tickets: ''
	},
	{
		date: "May 31",
		city: 'South Jordan, UT',
		venue: 'SoJo Summerfest - 1100 S Redwood Rd',
		tickets: ''
	},
	{
		date: 'June 8',
		city: 'Daybreak, UT',
		venue: 'SoDa Row Summer Concert Series',
		tickets: ''
	},
	{
		date: "June 10",
		city: "St. George, UT",
		venue: "Concert In The Park",
		tickets: ''
	},
	{
		date: 'June 28',
		city: 'Salt Lake City, UT',
		venue: 'Venture Out! Festival',
		tickets: ''
	},
	{
		date: 'June 29',
		city: 'Springville, UT',
		venue: 'Springville City Library',
		tickets: ''
	},
	{
		date: 'July 4',
		city: 'Clearfield, UT',
		venue: 'Fisher Park',
		tickets: ''
	},
	{
		date: 'July 5',
		city: 'Provo, UT',
		venue: 'ABGs',
		tickets: ''
	},
	{
		date: 'July 6',
		city: 'Boise, ID',
		venue: 'Private Event',
		tickets: ''
	},
	{
		date: 'July 12',
		city: 'Salt Lake City, UT',
		venue: 'Hidden Hollow Concert Series',
		tickets: ''
	},
	{
		date: 'July 13',
		city: 'Lindon, UT',
		venue: 'Lindon Marina',
		tickets: ''
	},
	{
		date: 'July 15',
		city: 'Lehi, UT',
		venue: 'Private Event',
		tickets: ''
	},
	{
		date: 'July 16',
		city: 'Provo, UT',
		venue: 'BYU Highway 89',
		tickets: ''
	},
	{
		date: 'August 7',
		city: 'Logan, UT',
		venue: 'WhySound',
		tickets: ''
	},
	{
		date: 'September 14',
		city: 'Grantsville, UT',
		venue: 'Lantern Festival',
		tickets: ''
	},
	{
		date: 'September 27',
		city: 'Provo, UT',
		venue: 'The Rise',
		tickets: ''
	},
	{
		date: 'September 28',
		city: 'Huntsville, UT',
		venue: 'Private Event',
		tickets: ''
	},
	{
		date: 'October 3',
		city: 'Logan, UT',
		venue: 'Taggart Student Center USU',
		tickets: ''
	},
	{
		date: 'October 4',
		city: 'Seattle, WA',
		venue: 'SoFar Secret Show',
		tickets: ''
	},
	{
		date: 'October 5',
		city: 'Seattle, WA',
		venue: 'SoFar Secret Show',
		tickets: ''
	},
	{
		date: 'October 16',
		city: 'Provo, UT',
		venue: 'Swiss Mix House',
		tickets: ''
	},
	{
		date: 'November 15',
		city: 'Orem, UT',
		venue: 'The Rise',
		tickets: ''
	},
	{
		date: 'February 28',
		city: 'Logan, UT',
		venue: 'The Cache',
		tickets: ''
	}
	{
		date: "February 28",
		city: "Las Vegas, NV",
		venue: "Ferguson's Downtown",
		tickets:''
	},
	{
		date: "February 28",
		city: "Las Vegas, NV",
		venue: "SoFar - Venue TBD",
		tickets:''
	},
	{
		date: "March 13",
		city: "Provo, UT",
		venue: "Velour Live Music Gallery",
		tickets:''
	},
	{
		date: "March 14",
		city: "Salt Lake City, UT",
		venue: "Kilby Court",
		tickets:''
	},
	{
		date: "April 30",
		city: "Seattle, WA",
		venue: "SoFar - Venue TBD",
		tickets:''
	},
	{
		date: "May 1",
		city: "Seattle, WA",
		venue: "SoFar - Venue TBD",
		tickets:''
	},
	{
		date: "May 2",
		city: "Seattle, WA",
		venue: "Tim's Tavern",
		tickets:''
	},
	{
		date: "June 19",
		city: "Magna, UT",
		venue: "Pleasant Green Park",
		tickets:''
	}
	*/
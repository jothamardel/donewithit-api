const mostViewed =[ 
	{
		title: "Phy201",
		id: 400,
		ratings: 2,
		views: 1000,
		fullName: 'John Larry',
		imageUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
	},
	{
		title: "Econs211",
		id: 500,
		ratings: 4,
		views: 300,
		fullName: 'Janet Kasuwa',
		imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
	},
	{
		title: "Acc201",
		id: 700,
		ratings: 2,
		views: 500,
		fullName: 'Daniel Tawus',
		imageUrl: 'https://images.unsplash.com/photo-1552321649-f66d87409da2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
	},

	{
		title: "CS101",
		id: 600,
		ratings: 4,
		views: 1030,
		fullName: 'James Doe',
		imageUrl: 'https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
	},
	{
		title: "Bio101",
		id: 200,
		ratings: 4,
		views: 200,
		fullName: 'David Doe',
		imageUrl: 'https://images.unsplash.com/photo-1484516396415-4971641de8e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
	},
];


const getAllMostViewed = () => mostViewed;

module.exports = {
	getAllMostViewed
}
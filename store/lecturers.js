const lecturers = [
	{
		id: 1,
		fullName: 'Jane Doe',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Mathematics Department',
		imageUrl: 'https://images.unsplash.com/photo-1592598015799-35c84b09394c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
		course: [
			{
				title: "Math101",
				id: 200,
				ratings: 4
			},
			{
				title: "Math201",
				id: 400,
				ratings: 2
			},
			{
				title: "Math211",
				id: 500,
				ratings: 1
			},
		]
	},
	{
		id: 2,
		fullName: 'John Larry',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Physics Department',
		imageUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
		course: [
			{
				title: "Phy101",
				id: 200,
				ratings: 4
			},
			{
				title: "Phy201",
				id: 400,
				ratings: 2
			},
			{
				title: "Phy211",
				id: 500,
				ratings: 1
			},
		]
	},
	{
		id: 3,
		fullName: 'Janet Kasuwa',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Economics Department',
		imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
		course: [
			{
				title: "Econs101",
				id: 200,
				ratings: 4
			},
			{
				title: "Econs201",
				id: 400,
				ratings: 2
			},
			{
				title: "Econs211",
				id: 500,
				ratings: 4
			},
		]
	},
	{
		id: 4,
		fullName: 'Daniel Tawus',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Accounting Department',
		imageUrl: 'https://images.unsplash.com/photo-1552321649-f66d87409da2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
		course: [
			{
				title: "Acc101",
				id: 200,
				ratings: 4
			},
			{
				title: "Acc201",
				id: 400,
				ratings: 4
			},
			{
				title: "Acc211",
				id: 500,
				ratings: 3
			},
		]
	},
	{
		id: 5,
		fullName: 'James Doe',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Computer Science Department',
		imageUrl: 'https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
		course: [
			{
				title: "CS101",
				id: 200,
				ratings: 4
			},
			{
				title: "CS201",
				id: 400,
				ratings: 2
			},
			{
				title: "CS211",
				id: 500,
				ratings: 4
			},
		]
	},
	{
		id: 6,
		fullName: 'David Doe',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat.",
		dept:'Biology Department',
		imageUrl: 'https://images.unsplash.com/photo-1484516396415-4971641de8e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
		course: [
			{
				title: "Bio101",
				id: 200,
				ratings: 3
			},
			{
				title: "Bio201",
				id: 400,
				ratings: 2
			},
			{
				title: "Bio211",
				id: 500,
				ratings: 3
			},
		]
	},
]

const getAllLecturers = () => lecturers;


module.exports = {
	getAllLecturers
}
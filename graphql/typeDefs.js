const { gql } = require("apollo-server");

module.exports = gql`
	type metricType {
		identifier: String!
	}

	type metricData {
		id: ID!
		value: Float!
	}

	type metrics {
		id: ID!
		type: metricType
		createdAt: String!
		values: [metricData]!
	}

	type diaryEntry {
		id: ID!
		body: String!
		createdAt: String!
		username: String!
	}

	type User {
		id: ID!
		email: String!
		username: String!
		token: String!
		refreshToken: String!
		createdAt: String!
	}

	type RegisterInput {
		username: String!
		email: String!
		password: String!
		confirmPassword: String!
	}

	type Query {
		getDiaryEnries: [diaryEntry]
		getMetrics: [metrics]
	}

	type Mutation {
		register(registerInputs: RegisterInput): User!
		login(username: String!, email: String, password: String): User

		createDiaryEntry(body: String!): diaryEntry
		deleteDiaryEntry(diaryEntryId: ID!): String!
	}
`;

import { User } from "../interfaces/User"

export const mapQueryResultToUsers = (results: any): User[] => {
    return !!results && results.search.edges.reduce(
      (users: User[], edge: any) => [...users, edge.node],
      [],
    )
  }
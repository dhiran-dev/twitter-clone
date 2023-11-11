//this custom hook will return a user if there is a user
// hooks/user.ts

import { graphQLClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphQLClient.request(getCurrentUserQuery),
  });

  if (isLoading) {
    // You can return loading indicators here
    return { isLoading: true, user: null };
  }

  if (isError) {
    // You can handle the error case here
    // and provide an option to retry
    return { isError: true, user: null };
  }

  return { user: data?.getCurrentUser };
};

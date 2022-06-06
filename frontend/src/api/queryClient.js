import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider as Provider } from "react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }) => <Provider client={queryClient}>{children}</Provider>;

QueryClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { queryClient, QueryClientProvider };

import {
  matchPath, useNavigate, generatePath
} from 'react-router-dom';

const useSearch = ({ pathname, pattern }) => {
  const navigate = useNavigate();
  const match = matchPath(pattern, pathname);
  const search = params => navigate(
    generatePath(pattern, params)
  );
  return {
    params: match
      ? match.params
      : {},
    search,
  };
};

export default useSearch;

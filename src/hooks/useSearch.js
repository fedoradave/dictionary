import {
  matchPath, useNavigate, generatePath
} from 'react-router-dom';

const useSearch = ({ pathname, pattern }) => {
  const navigate = useNavigate();
  const match = matchPath(pattern, pathname);
  const search = (params = {}) => navigate(
    generatePath(pattern, Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key, encodeURIComponent(value)
      ])
    ))
  );
  const params = match
    ? Object.fromEntries(
      Object.entries(match.params).map(([key, value]) => [
        key, decodeURIComponent(value)
      ])
    ) : {};
  return {
    params,
    search,
  };
};

export default useSearch;

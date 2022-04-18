export interface RequestStatus<R, E = Error> {
  error?: E;
  loading?: boolean;
  value?: R;
}

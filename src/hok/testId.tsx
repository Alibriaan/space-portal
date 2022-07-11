function addTestId<T>(Component:  React.ComponentType<T>, testId: string) {
  return (props: T) => <Component { ...props  } data-testid={testId} />
}

export default addTestId;
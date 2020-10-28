declare namespace LibConfig {
  let version: string
  function submit(): void
  interface Options {
    [key: string]: any
  }
}

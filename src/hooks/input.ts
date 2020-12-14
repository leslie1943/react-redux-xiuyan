import { useState } from 'react'

// type Key = string | number
export function useUpdateInput(initialValue: React.Key | undefined) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
  }
}

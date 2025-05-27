#!/usr/bin/env bash

# Usage: ./mark-for-translation.sh dir1 dir2 dir3 ...

set -euo pipefail

if [[ $# -eq 0 ]]; then
  echo "Usage: $0 <directory1> [directory2 ...]"
  exit 1
fi

MARKER_TEXT="to be translated"

for dir in "$@"; do
  if [[ ! -d "$dir" ]]; then
    echo "Skipping: '$dir' is not a directory"
    continue
  fi

  find "$dir" -type f -name "*.md" | while read -r file; do
    echo "$MARKER_TEXT" > "$file"
    echo "Overwritten: $file"
  done
done

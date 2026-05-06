# Welcome to your Expo app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Development

1. khusan - usanapp
2. http server - usanhttp
3. websocket server - usanws
4. khusan docs - usandocs
5. khubus - busapp
6. graphql server - bushttp
7. continuing
8. docs include settings
9. crawling
10. infra

# ZSH
```bash
function gab() {
    stagedFiles=$(git diff --cached --name-only)

    if [[ -z "$stagedFiles" ]]; then
        echo "No staged files found. Aborting commit."
        return 1
    fi

    echo "Running biome format on staged files..."
    npx biome check --write -- $stagedFiles

    echo "Re-adding formatted files to commit..."
    git add $stagedFiles
}
function gad() {
    stagedFiles=$(git diff --cached --name-only)

    if [[ -z "$stagedFiles" ]]; then
        echo "No staged files found. Aborting commit."
        return 1
    fi

    echo "Running deno lint on staged files..."
    deno lint $stagedFiles

    echo "Running deno format on staged files..."
    deno fmt $stagedFiles
    if [[ $? -ne 0 ]]; then
        echo "Deno format failed. Aborting commit."
        return 1
    fi

    git add $stagedFiles
}
function gcb() {
  # Generate commit message using opencode
  msg=$(git diff --cached | opencode --model opencode/big-pickle run "Write a commit message in the Conventional Commits format without backticks in short")

  # Commit with generated message
  git commit -m "$msg" -n

  # Show the last commit with stats
  git --no-pager log --stat -1
}
```
# POSH
```bash
function Git-Commit {
    $prompt = 'Write a commit message in the Conventional Commits format.'

    $commitMessage = (git diff --cached | opencode --model opencode/big-pickle run $prompt).Trim()

    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        Write-Host "No commit message generated. Aborting commit." -ForegroundColor Yellow
        Write-Host "This might be because there are no staged changes." -ForegroundColor Yellow
        return # Exit the function
    }

    git commit -m $commitMessage

    if ($LASTEXITCODE -eq 0) {
        git log --stat -1
    }
}
function Git-Biome {
    # Get staged files
    $stagedFiles = git diff --cached --name-only

    if (-not $stagedFiles) {
        Write-Host "No staged files found. Aborting commit." -ForegroundColor Yellow
        return
    }

    # Run biome format on staged files
    Write-Host "Running biome format on staged files..."
    npx biome check --write -- $stagedFiles
    # Re-add formatted files to the commit
    Write-Host "Re-adding formatted files to commit..."
    git add $stagedFiles
}
function Git-Deno {
    # Get staged files
    $stagedFiles = git diff --cached --name-only

    if (-not $stagedFiles) {
        Write-Host "No staged files found. Aborting commit." -ForegroundColor Yellow
        return
    }

    # Run npm lint script on staged files
    Write-Host "Running deno lint on staged files..."
    deno lint @($stagedFiles)
    # Run biome format on staged files
    Write-Host "Running deno format on staged files..."
    deno fmt @($stagedFiles)
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Biome format failed. Aborting commit." -ForegroundColor Red
        return
    }
    git add $stagedFiles
}
# Aliases
Set-Alias -Name gcb -Value Git-Commit
Set-Alias -Name gab -Value Git-Biome
Set-Alias -Name gad -Value Git-Deno
```

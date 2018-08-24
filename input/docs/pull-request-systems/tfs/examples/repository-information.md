---
Order: 10
Title: Using with repository remote url and source branch name
Description: Examples how to use the Cake.Issues.PullRequests.Tfs addin with repository remote url and source branch name.
---
This example shows how to write issues as comments to a Team Foundation Server (TFS) or
Visual Studio Team Services (VSTS) pull request while using repository information.

To determine the remote repository URL and source branch of the pull request you need the [Cake.Git] addin:

```csharp
#addin "Cake.Git"
```

To write issues as comments to TFS or VSTS pull requests you need to import the core addin,
the core pull request addin, the TFS/VSTS support and one or more issue provider, in this example
for JetBrains InspectCode:

```csharp
#addin "Cake.Issues"
#addin "Cake.Issues.InspectCode"
#addin "Cake.Issues.PullRequests"
#addin "Cake.Issues.PullRequests.Tfs"
```

In the following task we'll first determine the remote repository URL and
source branch of the pull request and with this information call the [TfsPullRequests] alias:

```csharp
Task("ReportIssuesToPullRequest").Does(() =>
{
    var repoRootFolder = MakeAbsolute(Directory("./"));
    var currentBranch = GitBranchCurrent(repoRootFolder);
    var repoRemoteUrl = new Uri(currentBranch.Remotes.Single(x => x.Name == "origin").Url);
    var sourceBranchName = currentBranch.CanonicalName;

    ReportIssuesToPullRequest(
        InspectCodeIssuesFromFilePath(
            @"C:\build\inspectcode.log"),
        TfsPullRequests(
            repoRemoteUrl,
            sourceBranchName,
            TfsAuthenticationNtlm()),
        repoRootFolder);
});
```

[TfsPullRequests]: ../../../api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSystemAliases/
[Cake.Git]: https://www.nuget.org/packages/Cake.Git/
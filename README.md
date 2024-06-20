# approve-pull-request-owner-action

A GitHub Action for approving pull requests made by the repo owner.

## Usage

```yaml
steps:
  - name: Approve Pull Request
    uses: miguel-martinr/approve-pull-request-owner-action@v2
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}      
```

## Related
- [approve-pull-request-action](https://github.com/juliangruber/approve-pull-request-action)
- [find-pull-request-action](https://github.com/juliangruber/find-pull-request-action) &mdash; Find a Pull Request
- [merge-pull-request-action](https://github.com/juliangruber/merge-pull-request-action) &mdash; Merge a Pull Request
- [octokit-action](https://github.com/juliangruber/octokit-action) &mdash; Generic Octokit.js Action

## License

MIT

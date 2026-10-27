# Maintaining the kit

How to ship an update so every attendee gets it.

## Layout

```
.claude-plugin/marketplace.json      Claude marketplace catalogue
.agents/plugins/marketplace.json     OpenAI (ChatGPT/Codex) marketplace catalogue
plugins/lead-gen-site-kit/
  .claude-plugin/plugin.json         Claude manifest (no version on purpose, see below)
  plugin.json                        OpenAI portable manifest (has a version)
  skills/<skill>/SKILL.md            the instructions the AI loads
  skills/<skill>/references/         detail loaded only when needed
scripts/package.sh                   builds the downloadable files for the Claude app
CHANGELOG.md                         dated list of what changed, newest first
```

## Releasing an update

1. Edit the skill files.
2. Add a dated entry to `CHANGELOG.md` saying what changed in plain words.
3. Bump `version` in `plugins/lead-gen-site-kit/plugin.json` (the OpenAI manifest): patch for wording fixes (0.1.1), minor for new guidance or a new skill (0.2.0).
4. Run the checks below.
5. Commit and push to `main`.
6. Run `scripts/package.sh` and post the new `.plugin` file for attendees on the Claude app individual plan, who do not get automatic updates.

**Why the Claude manifest has no version:** with `version` omitted, Claude Code treats every new commit as an update, so a push is all it takes. If you ever add a `version` there, you must bump it on every release or nobody receives your changes.

## Checks before pushing

```bash
# No em or en dashes anywhere (house style)
grep -rlP '\x{2014}|\x{2013}' . --exclude-dir=.git

# Claude validates the marketplace and the plugin (needs the claude CLI)
claude plugin validate .
```

Test locally before pushing: `claude plugin marketplace add ./` from this folder, then install and try each skill in a scratch project.

## Rules for writing skills

- `SKILL.md` stays short (well under 3,000 words): when to use it, the steps, the non-negotiables. Detail goes in `references/`.
- The `description` in the frontmatter decides when the AI picks the skill. Include the phrases attendees actually say.
- Write instructions to the AI, in the imperative ("Read the brief", not "You should read the brief").
- Keep every example generic: never name a real site, business, service type or town. Use placeholders (`[Brand]`, `[service]`, `[location]`) or phrases like "on a previous build". Never include private details either: no phone numbers, funnel URLs, account IDs, analytics numbers that identify the business, or client data.
- Do not copy text from third-party skills. Write our own wording based on what we learned.

## Giving attendees access

The repository is private in the `Lead-Gen-Skills` organisation. Attendees join the `students` team, which has read-only access.

Add someone (sends an email invite to the organisation and the team):

```bash
gh api -X PUT orgs/Lead-Gen-Skills/teams/students/memberships/THEIR-GITHUB-USERNAME
```

Or in the browser: Lead-Gen-Skills, Teams, students, Add a member.

Remove someone (they keep their installed copy but get no further updates):

```bash
gh api -X DELETE orgs/Lead-Gen-Skills/memberships/THEIR-GITHUB-USERNAME
```

Never give attendees write access or make them organisation owners. Anything pushed to `main` reaches every attendee.

## Things that break installs

- Renaming the plugin (`lead-gen-site-kit`) or the marketplace (`lead-gen-course`). Every attendee's install is keyed on those names. If you must rename, add a `renames` map to `.claude-plugin/marketplace.json`.
- A top-level `bin/` folder in the plugin (claude.ai organisation sync rejects it). Keep scripts under `skills/<skill>/scripts/`.
- Git LFS for any plugin file (clones never download LFS content).

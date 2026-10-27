# Lead Gen Site Kit

The website playbook from the Lead Gen course, packaged as a plugin for your AI assistant. It teaches Claude (or ChatGPT/Codex) to build, optimise and audit lead-generation websites the proven way: fast static sites, one clear call to action, honest proof, local SEO, schema, AI search and a launch scorecard.

Install it once. When we improve the kit, your assistant picks up the changes automatically.

## What's inside

| Skill | Use it to | Try saying |
|---|---|---|
| `build-site` | Plan and build a new lead-gen site from a brief, or add a location | "Build me a lead gen site for [service] in [location] and [location]" |
| `lead-form` | Build or fix the quote form: one question per screen, a starting price reveal, spam checks, saving and forwarding leads | "Replace my GoHighLevel form with our own quote form" |
| `optimize-images` | Prepare every photo: WebP, resize, keyword filename, alt text, geotag | "Add these before and after photos to the home page" |
| `local-seo` | Google Business Profile, reviews, citations and links after launch | "My site is live, what do I do for local SEO now?" |
| `audit-site` | Score any site against the course scorecard and get the next five fixes | "Audit my site and tell me what to fix next" |

Your assistant uses the right skill on its own when your request matches. In Claude Code you can also call one directly, for example `/lead-gen-site-kit:audit-site`.

## Install

### Before you start: access

This kit lives in a private GitHub repository for course members.

1. Create a free GitHub account if you do not have one, and send us your GitHub username.
2. Accept the invitation email from GitHub (or open https://github.com/orgs/Lead-Gen-Skills/invitation while signed in). This adds you to the read-only students team.
3. Let your computer sign in to GitHub without asking each time. Install the GitHub CLI (https://cli.github.com), then run these two commands once in your terminal:

```bash
gh auth login
```

```bash
gh auth setup-git
```

Step 3 matters for automatic updates: they run in the background and cannot stop to ask for a password, so without a saved sign-in they quietly fail and you stay on the old version.

### Claude Code (terminal, or the Code tab in the Claude desktop app)

Run these inside a Claude Code session:

```
/plugin marketplace add Lead-Gen-Skills/lead-gen-site-kit
/plugin install lead-gen-site-kit@lead-gen-course
```

**Turn on automatic updates (do this once):** run `/plugin`, open **Marketplaces**, select **lead-gen-course**, then **Enable auto-update**. From then on, every new session checks for kit updates.

To update by hand at any time: `/plugin marketplace update lead-gen-course`.

If the add command fails with an SSH error, start Claude Code with `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` set in your shell. If it says the repository was not found, your invitation has not been accepted yet, or step 3 above was skipped.

### Claude app (claude.ai or desktop chat)

- **Team or Enterprise plan:** your admin can sync this repository under **Organization settings > Plugins & skills**, and everyone gets updates.
- **Individual plan:** download the latest `lead-gen-site-kit.plugin` file from the course and install it in the app, or upload the skill zips under **Settings > Capabilities > Skills**. These copies do not update themselves; grab the new file when we announce an update.

### ChatGPT and Codex

OpenAI's plugins use the same skill format, and this repository includes an OpenAI marketplace file.

- **Codex:** open `/plugins` in Codex and add this repository as a marketplace, then install **lead-gen-site-kit**. Run `codex plugin marketplace upgrade` to pull updates.
- **ChatGPT (Business or Enterprise workspace):** a workspace admin can import this GitHub marketplace for the team under plugin management.

## Start your first site

In a new, empty project folder, say:

> Use the lead gen site kit to build a new site. Start with the brief.

Your assistant walks you through the brief (business model, locations, CTA, guarantee, real proof), then builds the site step by step and finishes with the launch checklist. Re-run the audit any time to track progress.

## Questions

Ask in the course community. If something in the kit is wrong or out of date, tell us and we will fix it for everyone.

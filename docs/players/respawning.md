<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/player-respawning.jpg');" markdown>
<span class="jmf-eyebrow">FRAMEWORK SYSTEM</span>
# Respawning and Resinsertion
What happens after death and how reinforcement rules affect you.
</div>

Our Framework handles all player respawning, and provides several options for getting back into the fight via our custom redeployment menu.

<div class="jmf-status-strip" markdown>
:material-skull: **Death** → :material-eye: **Spectate** → :material-account-reactivate: **Return**
</div>

## Respawning

Our missions tend to use immediate respawning after death. If the mission maker has enabled it, you may have to consider:

<div class="jmf-status-strip" markdown>
:material-skull: **Permadeath** → If this is enabled, respawns will be disabled. You will have to wait for Zeus to respawn you, or a mission-event disables Permadeath.
</div>

<div class="jmf-status-strip" markdown>
:material-skull: **Tickets** → If this is enabled, respawning will consume tickets. If tickets run out, then you will be unable to respawn until they are replenished by Zeus or your teammates.
</div>

You will always respawn at your team's staging area.

## Redeployment

Our framework contains a custom redeployment menu. Depending on mission settings, you may have several options for redeploying to the field:

<div class="jmf-status-strip" markdown>
:material-skull: **Rally** → If this is enabled, you can redeploy to the position of your Squad or Platoon rally that has been placed by a leadership role.
</div>

<div class="jmf-status-strip" markdown>
:material-skull: **Squadmate** → If this is enabled, you can redeploy to the position of a squadmate.
</div>

<div class="jmf-status-strip" markdown>
:material-skull: **Mobile Respawn Vehicle (MRV)** → If this is enabled, you can redeploy to the passenger seat of a designated mobile respawn vehicle.
</div>

<div class="jmf-status-strip" markdown>
:material-skull: **Request Reinsertion** → If this is enabled, you can broadcast a message to your team letting them know you are awaiting pickup at the spawn area.
</div>

Some of these options may be blocked by enemies in proximity of where you are redeploying to.

!!! info "Mission-specific rules"
    The briefing should explain the active respawn and redeployment setup, but these may change (with notice) mid-mission

# Entity Hooks

## CanAssignBed

``` csharp
void CanAssignBed(BasePlayer player, BaseEntity bed, ulong targetPlayerId)
{
    Puts("CanAssignBed works!");
}
```

 * Called when a player attempts to give a sleeping bag or bed to another player
 * Returning true overrides default behavior

## CanNetworkTo

``` csharp
void CanNetworkTo(BaseNetworkable entity, BasePlayer target)
{
    Puts("CanNetworkTo works!");
}
```

 * Called when an entity attempts to network with a player
 * Returning true overrides default behavior

## OnAirdrop

``` csharp
void OnAirdrop(CargoPlane plane, Vector3 location)
{
    Puts("OnAirdrop works!");
}
```

 * Called when an airdrop has been called
 * No return behavior

## OnEntityDeath

``` csharp
void OnEntityDeath(BaseCombatEntity entity, HitInfo info)
{
    Puts("OnEntityDeath works!");
}
```

 * hitInfo might be null, check it before use
 * Editing hitInfo has no effect because the death has already happened
 * No return behavior

## OnEntityEnter

``` csharp
void OnEntityEnter(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityEnter works!");
}
```

 * Called when an entity enters an area/zone (building privilege zone, water area, radiation zone, hurt zone, etc.)
 * No return behavior

## OnEntityGroundMissing

``` csharp
void OnEntityGroundMissing(BaseEntity entity)
{
    Puts("OnEntityGroundMissing works!");
}
```

 * Called when an entity (sleepingbag, sign, furnace,...) is going to be destroyed because the buildingblock it is on was removed
 * Returning true overides default behavior

## OnEntityLeave

``` csharp
void OnEntityLeave(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityLeave works!");
}
```

 * Called when an entity leaves an area/zone (building privilege zone, water area, radiation zone, hurt zone, etc.)
 * No return behavior

## OnEntitySpawned

``` csharp
void OnEntitySpawned(BaseNetworkable entity)
{
    Puts("OnEntitySpawned works!");
}
```

 * Called after any networked entity has spawned (including trees)
 * No return behavior

## OnEntityTakeDamage

``` csharp
void OnEntityTakeDamage(BaseCombatEntity entity, HitInfo info)
{
    Puts("OnEntityTakeDamage works!");
}
```

 * Alternatively, modify the hitInfo object to change the damage
 * It should be okay to set the damage to 0, but if you don't return non-null, the player's client will receive a damage indicator (if entity is a BasePlayer)
 * hitInfo has all kinds of useful things in it, such as hitInfo.Weapon, hitInfo.damageAmount or hitInfo.damageType
 * Returning true overrides default behavior (useful for godmode etc.)

## OnHelicopterTarget

``` csharp
void OnHelicopterTarget(HelicopterTurret turret, BaseCombatEntity entity)
{
    Puts("OnHelicopterTarget works!");
}
```

 * Called when a helicopter attempts to target an entity
 * Returning true overrides default behavior

## OnResourceDepositCreated

``` csharp
void OnResourceDepositCreated(ResourceDepositManager.ResourceDeposit deposit)
{
    Puts("OnResourceDepositCreated works!");
}
```

 * Called when a resource deposit has been created
 * No return behavior

## OnTurretShutdown

``` csharp
void OnTurretShutdown(AutoTurret turret)
{
    Puts("OnTurretShutdown works!");
}
```

 * Called when an autoturret shutsdown
 * Returning true overrides default behavior

## OnTurretStartup
 
 ``` csharp
void OnTurretStartup(AutoTurret turret)
{
    Puts("OnTurretStartup works!");
}
```

 * Called when an autoturret starts up
 * Returning true overrides default behavior
 
## OnTurretTarget

``` csharp
void OnTurretTarget(AutoTurret turret, BaseCombatEntity entity)
{
    Puts("OnTurretTarget works!");
}
```

 * Called when an autoturret attempts to target an entity
 * Returning true overrides default behavior

## OnTurretToggle

 ``` csharp
void OnTurretToggle(AutoTurret turret)
{
    Puts("OnTurretToggle works!");
}
```

 * Called when an autoturret toggles powerstate (on/off)
 * Returning true overrides default behavior
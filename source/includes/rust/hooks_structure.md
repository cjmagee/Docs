# Structure Hooks

## CanBuild

``` csharp
void CanBuild(Planner plan, Construction prefab)
{
    Puts("CanBuild works!");
}
```

 * Called when the player tries to build something
 * Returning true overrides default behavior

## CanUseLock

``` csharp
void CanUseLock(BasePlayer player, BaseLock @lock)
{
    Puts("CanUseLock works!");
}
```

 * Called when the player tries to use a locked entity
 * Returning true bypasses lock handling, nothing will by default will allow normal handling, returning anything else will reject lock usage

## CanUseLock

``` csharp
void CanUseLock(BasePlayer player, CodeLock @lock)
{
    Puts("CanUseLock works!");
}
```

 * Called when the player tries to access an entity secured with a code lock or learn a code lock
 * Returning true or nothing will allow access to the secured entity, returning anything else will reject access

## CanUseLock

``` csharp
void CanUseLock(BasePlayer player, KeyLock @lock)
{
    Puts("CanUseLock works!");
}
```

 * Called when the player tries to use a door with a key lock
 * Returning true allows door usage, nothing will by default will allow door usage, returning anything else will reject door usage

## OnCupboardClearList

``` csharp
void OnCupboardClearList(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardClearList works!");
}
```

 * Called when an attempt is made to clear a cupboard authorized list
 * Returning true overrides default behavior

## OnDoorClosed

``` csharp
void OnDoorClosed(Door door, BasePlayer player)
{
    Puts("OnDoorClosed works!");
}
```

 * Called when the player closed a door
 * No return behavior

## OnDoorOpened

``` csharp
void OnDoorOpened(Door door, BasePlayer player)
{
    Puts("OnDoorOpened works!");
}
```

 * Called when the player opened a door
 * No return behavior

## OnCupboardAuthorize

``` csharp
void OnCupboardAuthorize(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardAuthorize works!");
}
```

 * Called when a cupboard attempts to authorize a player
 * Returning true cancels the authorization

## OnCupboardDeauthorize

``` csharp
void OnCupboardDeauthorize(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardDeauthorize works!");
}
```

 * Called when a cupboard attempts to deauthorize a player
 * Returning true cancels the deauthorization

## OnEntityBuilt

``` csharp
void OnEntityBuilt(Planner plan, GameObject go)
{
    Puts("OnEntityBuilt works!");
}
```

 * Called when any structure is built (walls, ceilings, stairs, etc.)
 * No return behavior

## OnHammerHit

``` csharp
void OnHammerHit(BasePlayer player, HitInfo info)
{
    Puts("OnHammerHit works!");
}
```

 * Called when the player has hit something with a hammer
 * No return behavior

## OnStructureDemolish

``` csharp
void OnStructureDemolish(BaseCombatEntity entity, BasePlayer player)
{
    Puts("OnStructureDemolish works!");
}
```

 * Called when the player selects DemolishImmediate from the BuildingBlock or BaseCombatEntity menu
 * Returning true overrides the demolition

## OnStructureRepair

``` csharp
void OnStructureRepair(BaseCombatEntity entity, BasePlayer player)
{
    Puts("OnStructureRepair works!");
}
```

 * Called when the player repairs a BuildingBlock or BaseCombatEntity
 * No return behavior

## OnStructureRotate

``` csharp
void OnStructureRotate(BaseCombatEntity entity, BasePlayer player)
{
    Puts("OnStructureRotate works!");
}
```

 * Called when the player rotates a BuildingBlock or BaseCombatEntity
 * No return behavior

## OnStructureUpgrade

``` csharp
void OnStructureUpgrade(BaseCombatEntity entity, BasePlayer player, BuildingGrade.Enum grade)
{
    Puts("OnStructureUpgrade works!");
}
```

 * Called when the player upgrades the grade of a BuildingBlock or BaseCombatEntity
 * Returning true overrides the upgrade

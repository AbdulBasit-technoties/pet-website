<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = config('models.models');

        foreach ($models as $model) {
            Permission::firstOrCreate(['name' => "$model.index"]);
            Permission::firstOrCreate(['name' => "$model.create"]);
            Permission::firstOrCreate(['name' => "$model.store"]);
            Permission::firstOrCreate(['name' => "$model.show"]);
            Permission::firstOrCreate(['name' => "$model.edit"]);
            Permission::firstOrCreate(['name' => "$model.update"]);
            Permission::firstOrCreate(['name' => "$model.destroy"]);
        }

        $AdminRole = Role::firstOrCreate(['name' => 'Admin']);
        $permissions = Permission::all();
        $AdminRole->syncPermissions($permissions);
        $UserRole = $this->createRoleWithPermissions('User', []);

        $Admin = User::firstOrCreate([
            'email' => 'admin@technoties.com',
        ], [
            'name' => 'Admin',
            'password' => Hash::make('password'),
        ]);
        $Admin->assignRole($AdminRole);

        $User = User::firstOrCreate([
            'email' => 'user@technoties.com',
        ], [
            'name' => 'User',
            'password' => Hash::make('password'),
        ]);

        $User->assignRole($UserRole);

    }

    protected function createRoleWithPermissions($roleName, array $permissions)
    {
        $role = Role::firstOrCreate(['name' => $roleName]);
        $role->syncPermissions($permissions);
        return $role;
    }
}

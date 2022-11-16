<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class AllowUserManagement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:allow-user-management';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Allow user management for all users';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::query()->update(['can_user_management' => true]);
        return Command::SUCCESS;
    }
}

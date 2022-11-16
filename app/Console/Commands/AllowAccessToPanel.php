<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class AllowAccessToPanel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:allow-access-to-panel';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Allow access to panel for all users';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::query()->update(['has_admin_panel_access' => true]);
        return Command::SUCCESS;
    }
}

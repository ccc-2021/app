<?php

namespace App\Observer;

use App\Models\Character;
use App\Models\Todo;

class TodoObserver
{
    public function creating(Todo $todo): void
    {
        $todo->character_id = Character::virus()->inRandomOrder()->take(1)->value('id');
    }
}

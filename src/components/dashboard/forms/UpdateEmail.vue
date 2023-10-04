<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-[50%] h-[50vh] border border-red-500 rounded-md">
            <div class="h-full flex justify-center items-center flex-col">
                <h1 class="text-center my-10 text-2xl">Update email</h1>
                <div class="flex flex-col space-y-5 w-[50%]">
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">New email</label>
                        <input class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="email">Confirm new email</label>
                        <input class="w-full border border-red-500 rounded-md" type="email">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="w-full" for="password">Current Password</label>
                        <input class="w-full border border-red-500 rounded-md" type="password">
                    </div>
                    <div>
                        <button class="p-1 border rounded-md border-red-500 hover:bg-red-500 transition-all" type="submit">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
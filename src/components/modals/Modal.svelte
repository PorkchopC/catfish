<script lang="ts">
</script>

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 transition-opacity">
	<div class="flex min-h-full justify-center sm:items-center">
		<div
			class="relative rounded-lg bg-white text-left shadow-xl transition-all w-3/5 sm:p-6"
		>
			<div class="flex flex-col gap-2">
				<div>
					<slot name="Title" />
				</div>

				<div>
					<slot name="Body" />
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<slot name="Submit" />
				</div>

				<div>
					<slot name="Cancel" />
				</div>
			</div>
		</div>
	</div>
</div>

const campeonatos = () => {
    return (
        <div>
          <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-6">
					<form role="form">
						<div class="form-group">
							 
							<label for="exampleInputEmail1">
								Email address
							</label>
							<input type="email" class="form-control" id="exampleInputEmail1" />
						</div>
						<div class="form-group">
							 
							<label for="exampleInputPassword1">
								Password
							</label>
							<input type="password" class="form-control" id="exampleInputPassword1" />
						</div>
						<div class="form-group">
							 
							<label for="exampleInputFile">
								File input
							</label>
							<input type="file" class="form-control-file" id="exampleInputFile" />
							<p class="help-block">
								Example block-level help text here.
							</p>
						</div>
						<div class="checkbox">
							 
							<label>
								<input type="checkbox" /> Check me out
							</label>
						</div> 
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<div class="col-md-6">
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default campeonatos
